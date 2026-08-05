/**
 * PlacementPrep Premium 3D Core - Holographic 3D Cyber-Globe & Tactical Card Tilt Engine
 * Designed for rich visual aesthetics, extreme responsiveness, and offline-first usage.
 */

(function() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // ==========================================================================
    // 1. DYNAMIC BACKGROUND 3D SPINNING CYBER-GLOBE CANVAS ENGINE
    // ==========================================================================
    let canvas, ctx;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Globe 3D Parameters
    const GLOBE_RADIUS = 280;
    let globeRotationX = 25; // Initial pitch
    let globeRotationY = 45; // Initial yaw
    let targetRotationX = 25;
    let targetRotationY = 45;
    
    // Auto-spin velocity
    let autoSpinSpeedY = 0.12; 
    let autoSpinSpeedX = 0.04;
    
    // Mouse tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let isDragging = false;
    let dragStartX = 0, dragStartY = 0;
    let dragStartRotX = 0, dragStartRotY = 0;
    
    // Radar clicks tracker
    let radarSweeps = [];
    const FOV = 480; // Perspective zoom

    class Point3D {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        rotateX(angle) {
            const rad = angle * Math.PI / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            const y1 = this.y * cos - this.z * sin;
            const z1 = this.y * sin + this.z * cos;
            return new Point3D(this.x, y1, z1);
        }

        rotateY(angle) {
            const rad = angle * Math.PI / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            const x1 = this.x * cos - this.z * sin;
            const z1 = this.x * sin + this.z * cos;
            return new Point3D(x1, this.y, z1);
        }

        project(centerX, centerY) {
            const adjustedZ = this.z + 550; // Camera distance offset
            if (adjustedZ <= 0) return null;
            
            const scale = FOV / adjustedZ;
            const px = this.x * scale + centerX;
            const py = this.y * scale + centerY;
            
            return { x: px, y: py, scale: scale, depth: adjustedZ };
        }
    }

    function initCanvas() {
        canvas = document.createElement('canvas');
        canvas.id = 'canvas-3d';
        Object.assign(canvas.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-5',
            pointerEvents: 'auto', // Enable dragging background to rotate globe!
            opacity: '1'
        });
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        resizeCanvas();

        // Drag handlers to spin the globe!
        window.addEventListener('mousedown', (e) => {
            // Only drag if click is directly on canvas/background, not on cards/buttons
            if (e.target !== canvas) return;
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragStartRotX = targetRotationX;
            dragStartRotY = targetRotationY;
        });

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (isDragging) {
                const dx = e.clientX - dragStartX;
                const dy = e.clientY - dragStartY;
                
                // Adjust rotation sensitivity
                targetRotationY = dragStartRotY + dx * 0.35;
                targetRotationX = dragStartRotX + dy * 0.35;
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        window.addEventListener('click', (e) => {
            // Spawn expanding radar rings on background click
            if (e.target !== canvas) return;
            
            // Map click center
            radarSweeps.push({
                currentRadius: 0,
                maxRadius: GLOBE_RADIUS,
                speed: 6.5,
                opacity: 0.8
            });
        });

        window.addEventListener('resize', resizeCanvas);
        requestAnimationFrame(renderLoop);
    }

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    // Draws a 3D circle ring at a specific latitude or longitude orientation
    function draw3DRing(radius, heightOffset, rotAxis, theme) {
        ctx.beginPath();
        const numSegments = 60;
        let isDrawing = false;

        const strokeColor = theme === 'dark' ? 
            'rgba(139, 92, 246, 0.16)' : // Indigo/Violet HUD line
            'rgba(99, 102, 241, 0.08)';

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;

        // Determine globe center (placed on center-right for dashboard style)
        const centerX = width * 0.65;
        const centerY = height * 0.5;

        for (let i = 0; i <= numSegments; i++) {
            const angle = (i / numSegments) * Math.PI * 2;
            let p;

            if (rotAxis === 'latitude') {
                // Horizontal latitude rings
                p = new Point3D(
                    radius * Math.cos(angle),
                    heightOffset,
                    radius * Math.sin(angle)
                );
            } else {
                // Vertical longitude rings
                p = new Point3D(
                    radius * Math.cos(angle) * Math.cos(heightOffset),
                    radius * Math.sin(angle),
                    radius * Math.cos(angle) * Math.sin(heightOffset)
                );
            }

            // Apply globe rotation yaw/pitch matrices
            const rotated = p.rotateX(globeRotationX).rotateY(globeRotationY);
            const proj = rotated.project(centerX, centerY);

            if (proj) {
                // Painte's algorithm: Only draw paths on the front hemisphere face (Z < 0)
                if (rotated.z < 0) {
                    if (!isDrawing) {
                        ctx.moveTo(proj.x, proj.y);
                        isDrawing = true;
                    } else {
                        ctx.lineTo(proj.x, proj.y);
                    }
                } else {
                    isDrawing = false; // Break line path for back hemisphere face
                }
            }
        }
        ctx.stroke();
    }

    function drawRadarSweep(radius, sweepRadius, theme) {
        // Draw an expanding radar circle on the front sphere contour
        const numSegments = 60;
        let isDrawing = false;
        
        ctx.beginPath();
        ctx.lineWidth = 2;
        
        const centerX = width * 0.65;
        const centerY = height * 0.5;

        // Map radar distance into latitude circles
        // Angle theta determines horizontal slice height
        const theta = Math.asin(sweepRadius / radius); 

        for (let i = 0; i <= numSegments; i++) {
            const phi = (i / numSegments) * Math.PI * 2;
            
            // Sphere slice height & width
            const horizontalR = radius * Math.cos(theta);
            const sliceY = radius * Math.sin(theta);

            const p = new Point3D(
                horizontalR * Math.cos(phi),
                sliceY,
                horizontalR * Math.sin(phi)
            );

            const rotated = p.rotateX(globeRotationX).rotateY(globeRotationY);
            const proj = rotated.project(centerX, centerY);

            if (proj && rotated.z < 0) {
                if (!isDrawing) {
                    ctx.moveTo(proj.x, proj.y);
                    isDrawing = true;
                } else {
                    ctx.lineTo(proj.x, proj.y);
                }
            } else {
                isDrawing = false;
            }
        }
        ctx.stroke();
    }

    function renderLoop() {
        ctx.clearRect(0, 0, width, height);

        const theme = document.documentElement.getAttribute('data-theme') || 'light';

        // Slowly interpolate globe rotation pitch/yaw coordinates
        if (!isDragging) {
            targetRotationY += autoSpinSpeedY;
            targetRotationX += autoSpinSpeedX;
        }

        globeRotationX += (targetRotationX - globeRotationX) * 0.08;
        globeRotationY += (targetRotationY - globeRotationY) * 0.08;

        // 1. Draw Globe Latitude Circles
        const latSteps = 6;
        for (let i = -latSteps; i <= latSteps; i++) {
            const hOffset = (i / latSteps) * GLOBE_RADIUS * 0.95;
            // Radius of horizontal slice decreases as we go towards poles
            const sliceRadius = Math.sqrt(Math.max(0, GLOBE_RADIUS*GLOBE_RADIUS - hOffset*hOffset));
            draw3DRing(sliceRadius, hOffset, 'latitude', theme);
        }

        // 2. Draw Globe Longitude Circles
        const longSteps = 8;
        for (let i = 0; i < longSteps; i++) {
            const sliceAngle = (i / longSteps) * Math.PI;
            draw3DRing(GLOBE_RADIUS, sliceAngle, 'longitude', theme);
        }

        // 3. Render clicking Radar Sweeps
        radarSweeps = radarSweeps.filter(sweep => {
            sweep.currentRadius += sweep.speed;
            sweep.opacity = 1 - (sweep.currentRadius / sweep.maxRadius);
            
            ctx.strokeStyle = theme === 'dark' ? 
                `rgba(0, 240, 255, ${sweep.opacity * 0.55})` : // Cyber Cyan Radar
                `rgba(79, 70, 229, ${sweep.opacity * 0.45})`;

            drawRadarSweep(GLOBE_RADIUS, sweep.currentRadius, theme);
            drawRadarSweep(GLOBE_RADIUS, -sweep.currentRadius, theme); // Mirror polar ring
            
            return sweep.currentRadius < sweep.maxRadius;
        });

        // 4. Draw a glowing central hologram core
        const centerX = width * 0.65;
        const centerY = height * 0.5;
        const radialGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, GLOBE_RADIUS * 0.7);
        
        const coreColor = theme === 'dark' ? 
            'rgba(139, 92, 246, 0.06)' : 
            'rgba(99, 102, 241, 0.03)';
            
        radialGrad.addColorStop(0, coreColor);
        radialGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.02)');
        radialGrad.addColorStop(1, 'transparent');
        
        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(centerX, centerY, GLOBE_RADIUS * 0.7, 0, Math.PI * 2);
        ctx.fill();

        requestAnimationFrame(renderLoop);
    }

    // ==========================================================================
    // 2. CARD MOUSE Specular TRACKER (PRESERVE CSS EXTRUSION INTEGRITY)
    // ==========================================================================
    
    function applyCardTilt(card) {
        if (card.dataset.tiltInitialized) return;
        card.dataset.tiltInitialized = "true";

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Track percentages for specular reflection sheen
            const xPct = (x / rect.width) * 100;
            const yPct = (y / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${xPct}%`);
            card.style.setProperty('--mouse-y', `${yPct}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', `50%`);
            card.style.setProperty('--mouse-y', `50%`);
        });
    }

    function scanAndTilt() {
        if (isTouchDevice) return;

        const selectors = [
            '.glass-card',
            '.glass-panel',
            '.topic-hub-card',
            '.stat-card',
            '.formula-card',
            '.option-btn',
            '.roadmap-day-card'
        ];

        document.querySelectorAll(selectors.join(', ')).forEach(applyCardTilt);
    }

    function initTiltObserver() {
        if (isTouchDevice) return;

        scanAndTilt();

        const observer = new MutationObserver((mutations) => {
            let shouldScan = false;
            mutations.forEach(m => {
                if (m.addedNodes && m.addedNodes.length > 0) {
                    shouldScan = true;
                }
            });
            if (shouldScan) {
                scanAndTilt();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        initCanvas();
        initTiltObserver();
    });

    if (document.readyState === "complete" || document.readyState === "interactive") {
        if (!document.getElementById('canvas-3d')) {
            initCanvas();
            initTiltObserver();
        }
    }

    window.scanAndTilt3D = scanAndTilt;
})();
