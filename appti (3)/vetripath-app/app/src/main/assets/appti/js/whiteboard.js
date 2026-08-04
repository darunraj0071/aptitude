/* ==========================================================================
   WHITEBOARD.JS - Digital Whiteboard Engine with Progressive Animation
   ========================================================================== */

class DigitalWhiteboard {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.steps = [];
        this.currentStepIndex = -1;
        this.isAnimating = false;
        this.activeTool = 'draw'; // draw, erase, text, line, arrow, rect, circle
        this.strokeColor = '#00F0FF';
        this.lineWidth = 3;
        this.isDrawing = false;
        this.startX = 0;
        this.startY = 0;
        this.history = [];
        this.historyIndex = -1;
        this.animationTimer = null;

        this.initCanvas();
        this.bindEvents();
    }

    initCanvas() {
        const parent = this.canvas.parentElement;
        const width = parent ? parent.clientWidth : 600;
        const height = Math.max(350, Math.min(width * 0.6, 500));
        
        this.canvas.width = width * (window.devicePixelRatio || 1);
        this.canvas.height = height * (window.devicePixelRatio || 1);
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        
        this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        this.clearBoard();
    }

    clearBoard() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        // Dark theme grid background
        this.ctx.fillStyle = '#0F172A';
        this.ctx.fillRect(0, 0, width, height);

        // Subtle grid lines
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.lineWidth = 1;
        const gridSize = 25;
        for (let x = 0; x < width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, height);
            this.ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(width, y);
            this.ctx.stroke();
        }
        this.saveHistory();
    }

    bindEvents() {
        window.addEventListener('resize', () => this.initCanvas());

        const getPos = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        const startDraw = (e) => {
            if (this.isAnimating) return;
            const pos = getPos(e);
            this.isDrawing = true;
            this.startX = pos.x;
            this.startY = pos.y;
            this.ctx.beginPath();
            this.ctx.moveTo(pos.x, pos.y);
        };

        const moveDraw = (e) => {
            if (!this.isDrawing || this.isAnimating) return;
            const pos = getPos(e);
            if (this.activeTool === 'draw') {
                this.ctx.strokeStyle = this.strokeColor;
                this.ctx.lineWidth = this.lineWidth;
                this.ctx.lineCap = 'round';
                this.ctx.lineJoin = 'round';
                this.ctx.lineTo(pos.x, pos.y);
                this.ctx.stroke();
            } else if (this.activeTool === 'erase') {
                this.ctx.strokeStyle = '#0F172A';
                this.ctx.lineWidth = 20;
                this.ctx.lineTo(pos.x, pos.y);
                this.ctx.stroke();
            }
        };

        const stopDraw = () => {
            if (this.isDrawing) {
                this.isDrawing = false;
                this.saveHistory();
            }
        };

        this.canvas.addEventListener('mousedown', startDraw);
        this.canvas.addEventListener('mousemove', moveDraw);
        this.canvas.addEventListener('mouseup', stopDraw);
        this.canvas.addEventListener('mouseleave', stopDraw);

        this.canvas.addEventListener('touchstart', startDraw);
        this.canvas.addEventListener('touchmove', moveDraw);
        this.canvas.addEventListener('touchend', stopDraw);
    }

    saveHistory() {
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }
        const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.history.push(imgData);
        this.historyIndex = this.history.length - 1;
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.ctx.putImageData(this.history[this.historyIndex], 0, 0);
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.ctx.putImageData(this.history[this.historyIndex], 0, 0);
        }
    }

    setTool(tool) {
        this.activeTool = tool;
    }

    setColor(color) {
        this.strokeColor = color;
    }

    setSteps(steps) {
        this.steps = steps;
        this.currentStepIndex = -1;
        this.clearBoard();
    }

    renderStep(index, onComplete) {
        if (index < 0 || index >= this.steps.length) return;
        this.currentStepIndex = index;

        const step = this.steps[index];
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const yStart = 50 + index * 46;

        this.isAnimating = true;

        // Step Box Header
        this.ctx.fillStyle = '#1E293B';
        this.ctx.strokeStyle = step.highlight ? '#7F5AF0' : '#334155';
        this.ctx.lineWidth = 2;
        this.roundRect(this.ctx, 15, yStart - 22, width - 30, 40, 8, true, true);

        // Step Label Badge
        this.ctx.fillStyle = step.color || '#2CB67D';
        this.roundRect(this.ctx, 22, yStart - 16, 95, 26, 6, true, false);
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 12px Inter, sans-serif';
        this.ctx.fillText(step.badge || `Step ${index + 1}`, 30, yStart + 2);

        // Text typing animation
        let charIndex = 0;
        const text = step.text || '';
        const drawText = () => {
            if (charIndex <= text.length) {
                this.ctx.fillStyle = '#1E293B';
                this.ctx.fillRect(125, yStart - 18, width - 145, 30);

                this.ctx.fillStyle = step.highlight ? '#FFD166' : '#E2E8F0';
                this.ctx.font = '500 13px "Fira Code", monospace, sans-serif';
                this.ctx.fillText(text.substring(0, charIndex), 125, yStart + 2);
                charIndex++;
                this.animationTimer = setTimeout(drawText, 15);
            } else {
                this.isAnimating = false;
                this.saveHistory();
                if (step.diagram) {
                    this.drawDiagram(step.diagram, yStart + 22);
                }
                if (onComplete) onComplete();
            }
        };
        drawText();
    }

    drawDiagram(diagram, startY) {
        const ctx = this.ctx;
        if (diagram.type === 'blood_relation') {
            ctx.fillStyle = '#7F5AF0';
            ctx.fillRect(40, startY, 85, 28);
            ctx.fillStyle = '#FFF';
            ctx.font = '11px sans-serif';
            ctx.fillText(diagram.gen1 || 'Grandfather', 45, startY + 18);

            ctx.strokeStyle = '#00F0FF';
            ctx.beginPath();
            ctx.moveTo(82, startY + 28);
            ctx.lineTo(82, startY + 45);
            ctx.stroke();

            ctx.fillStyle = '#2CB67D';
            ctx.fillRect(40, startY + 45, 85, 28);
            ctx.fillStyle = '#FFF';
            ctx.fillText(diagram.gen2 || 'Father', 55, startY + 63);
        } else if (diagram.type === 'direction') {
            ctx.strokeStyle = '#FF5470';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(180, startY + 25, 18, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = '#00F0FF';
            ctx.fillText('N', 177, startY + 3);
            ctx.fillText('S', 177, startY + 55);
            ctx.fillText('W', 150, startY + 28);
            ctx.fillText('E', 205, startY + 28);
        } else if (diagram.type === 'venn') {
            ctx.strokeStyle = '#00F0FF';
            ctx.fillStyle = 'rgba(0, 240, 255, 0.2)';
            ctx.beginPath();
            ctx.arc(90, startY + 30, 25, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.strokeStyle = '#7F5AF0';
            ctx.fillStyle = 'rgba(127, 90, 240, 0.2)';
            ctx.beginPath();
            ctx.arc(125, startY + 30, 25, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }

    playAllSteps(onFinish) {
        let i = 0;
        this.clearBoard();
        const next = () => {
            if (i < this.steps.length) {
                this.renderStep(i, () => {
                    i++;
                    setTimeout(next, 400);
                });
            } else {
                if (onFinish) onFinish();
            }
        };
        next();
    }

    roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) ctx.stroke();
    }
}

window.DigitalWhiteboard = DigitalWhiteboard;
