/* ==========================================================================
   WORK_AREA.JS - Scratchpad, Drawing, Notepad, Calculator & Formula Helper
   ========================================================================== */

class WorkAreaScratchpad {
    constructor() {
        this.modal = null;
        this.canvas = null;
        this.ctx = null;
        this.isDrawing = false;
        this.calcDisplayValue = "0";

        this.init();
    }

    init() {
        this.createModalDOM();
        this.bindEvents();
    }

    createModalDOM() {
        if (document.getElementById('work-area-modal')) return;

        const modalHTML = `
            <div id="work-area-modal" class="modal-overlay" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; justify-content: center; align-items: center; padding: 1rem;">
                <div class="glass-card" style="width: 95%; max-width: 900px; max-height: 90vh; overflow-y: auto; background: var(--bg-card); border-radius: 16px; padding: 1.5rem; border: 1px solid var(--border); box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
                    
                    <!-- Modal Header -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.8rem;">
                        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--primary);"><i class="fa-solid fa-pen-ruler"></i> 📝 Work Area Scratchpad</h2>
                        <button id="wa-close-btn" class="btn btn-secondary" style="border-radius: 50%; width: 36px; height: 36px; padding: 0; display: flex; align-items: center; justify-content: center;">&times;</button>
                    </div>

                    <!-- Work Area Tab Header -->
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                        <button class="wa-tab-btn active" data-tab="drawing" style="padding: 0.5rem 1rem; border-radius: 8px; border: none; background: var(--primary); color: #fff; font-weight: 600; cursor: pointer;">🎨 Drawing Canvas</button>
                        <button class="wa-tab-btn" data-tab="notepad" style="padding: 0.5rem 1rem; border-radius: 8px; border: none; background: var(--bg-main); color: var(--text-secondary); font-weight: 600; cursor: pointer;">📝 Typed Notes</button>
                        <button class="wa-tab-btn" data-tab="calc" style="padding: 0.5rem 1rem; border-radius: 8px; border: none; background: var(--bg-main); color: var(--text-secondary); font-weight: 600; cursor: pointer;">🧮 Calculator</button>
                        <button class="wa-tab-btn" data-tab="formulas" style="padding: 0.5rem 1rem; border-radius: 8px; border: none; background: var(--bg-main); color: var(--text-secondary); font-weight: 600; cursor: pointer;">📐 Formulas</button>
                    </div>

                    <!-- Tab Content Panes -->
                    <div id="wa-pane-drawing" class="wa-pane" style="display: block;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <div style="display: flex; gap: 0.5rem;">
                                <button id="wa-pen-btn" class="btn btn-secondary" style="padding: 0.3rem 0.8rem; font-size: 0.85rem;"><i class="fa-solid fa-pen"></i> Pen</button>
                                <button id="wa-eraser-btn" class="btn btn-secondary" style="padding: 0.3rem 0.8rem; font-size: 0.85rem;"><i class="fa-solid fa-eraser"></i> Eraser</button>
                            </div>
                            <button id="wa-clear-btn" class="btn btn-secondary" style="padding: 0.3rem 0.8rem; font-size: 0.85rem; background: #EF4444; color: #fff;"><i class="fa-solid fa-trash"></i> Clear</button>
                        </div>
                        <canvas id="wa-canvas" style="width: 100%; height: 350px; background: #0F172A; border-radius: 10px; border: 1px solid var(--border); touch-action: none;"></canvas>
                    </div>

                    <div id="wa-pane-notepad" class="wa-pane" style="display: none;">
                        <textarea id="wa-notes-input" placeholder="Type your calculations, equations, or notes here..." style="width: 100%; height: 350px; background: #0F172A; color: var(--text-main); font-family: 'Fira Code', monospace; padding: 1rem; border-radius: 10px; border: 1px solid var(--border); font-size: 1rem; resize: none;"></textarea>
                    </div>

                    <div id="wa-pane-calc" class="wa-pane" style="display: none;">
                        <div style="max-width: 320px; margin: 0 auto; background: #0F172A; padding: 1rem; border-radius: 14px; border: 1px solid var(--border);">
                            <input id="wa-calc-display" type="text" value="0" readonly style="width: 100%; height: 50px; background: #1E293B; color: #00F0FF; font-family: monospace; font-size: 1.5rem; text-align: right; padding: 0.5rem; border-radius: 8px; border: none; margin-bottom: 1rem;">
                            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
                                <button class="calc-btn" data-val="C" style="padding: 0.8rem; border-radius: 8px; background: #EF4444; color: #fff; font-weight: bold; border: none;">C</button>
                                <button class="calc-btn" data-val="(" style="padding: 0.8rem; border-radius: 8px; background: #334155; color: #fff; border: none;">(</button>
                                <button class="calc-btn" data-val=")" style="padding: 0.8rem; border-radius: 8px; background: #334155; color: #fff; border: none;">)</button>
                                <button class="calc-btn" data-val="/" style="padding: 0.8rem; border-radius: 8px; background: var(--primary); color: #fff; border: none;">÷</button>

                                <button class="calc-btn" data-val="7" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">7</button>
                                <button class="calc-btn" data-val="8" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">8</button>
                                <button class="calc-btn" data-val="9" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">9</button>
                                <button class="calc-btn" data-val="*" style="padding: 0.8rem; border-radius: 8px; background: var(--primary); color: #fff; border: none;">×</button>

                                <button class="calc-btn" data-val="4" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">4</button>
                                <button class="calc-btn" data-val="5" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">5</button>
                                <button class="calc-btn" data-val="6" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">6</button>
                                <button class="calc-btn" data-val="-" style="padding: 0.8rem; border-radius: 8px; background: var(--primary); color: #fff; border: none;">-</button>

                                <button class="calc-btn" data-val="1" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">1</button>
                                <button class="calc-btn" data-val="2" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">2</button>
                                <button class="calc-btn" data-val="3" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">3</button>
                                <button class="calc-btn" data-val="+" style="padding: 0.8rem; border-radius: 8px; background: var(--primary); color: #fff; border: none;">+</button>

                                <button class="calc-btn" data-val="0" style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">0</button>
                                <button class="calc-btn" data-val="." style="padding: 0.8rem; border-radius: 8px; background: #1E293B; color: #fff; border: none;">.</button>
                                <button class="calc-btn" data-val="sqrt" style="padding: 0.8rem; border-radius: 8px; background: #334155; color: #fff; border: none;">√</button>
                                <button class="calc-btn" data-val="=" style="padding: 0.8rem; border-radius: 8px; background: #2CB67D; color: #fff; font-weight: bold; border: none;">=</button>
                            </div>
                        </div>
                    </div>

                    <div id="wa-pane-formulas" class="wa-pane" style="display: none;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; max-height: 350px; overflow-y: auto;">
                            <div style="background: #1E293B; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: bold; color: var(--primary);">Percentages</div>
                                <div style="font-size: 0.85rem; color: #FFD166; font-family: monospace;">% Change = (Change / Original) * 100</div>
                            </div>
                            <div style="background: #1E293B; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: bold; color: var(--primary);">Profit & Loss</div>
                                <div style="font-size: 0.85rem; color: #FFD166; font-family: monospace;">Profit % = [(SP - CP) / CP] * 100</div>
                            </div>
                            <div style="background: #1E293B; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: bold; color: var(--primary);">Speed & Distance</div>
                                <div style="font-size: 0.85rem; color: #FFD166; font-family: monospace;">Speed = Distance / Time</div>
                            </div>
                            <div style="background: #1E293B; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: bold; color: var(--primary);">Time & Work</div>
                                <div style="font-size: 0.85rem; color: #FFD166; font-family: monospace;">Work = Efficiency * Time</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('work-area-modal');
        this.canvas = document.getElementById('wa-canvas');
        if (this.canvas) this.ctx = this.canvas.getContext('2d');
    }

    bindEvents() {
        const closeBtn = document.getElementById('wa-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', () => this.hide());

        document.querySelectorAll('.wa-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.wa-tab-btn').forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'var(--bg-main)';
                    b.style.color = 'var(--text-secondary)';
                });
                btn.classList.add('active');
                btn.style.background = 'var(--primary)';
                btn.style.color = '#fff';

                const tab = btn.dataset.tab;
                document.querySelectorAll('.wa-pane').forEach(p => p.style.display = 'none');
                document.getElementById(`wa-pane-${tab}`).style.display = 'block';

                if (tab === 'drawing') this.resizeCanvas();
            });
        });

        // Calculator Buttons
        document.querySelectorAll('.calc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.dataset.val;
                this.handleCalcInput(val);
            });
        });

        // Drawing Canvas
        if (this.canvas) {
            const getPos = (e) => {
                const rect = this.canvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return { x: clientX - rect.left, y: clientY - rect.top };
            };
            const start = (e) => {
                this.isDrawing = true;
                const pos = getPos(e);
                this.ctx.beginPath();
                this.ctx.moveTo(pos.x, pos.y);
            };
            const move = (e) => {
                if (!this.isDrawing) return;
                const pos = getPos(e);
                this.ctx.strokeStyle = '#00F0FF';
                this.ctx.lineWidth = 3;
                this.ctx.lineTo(pos.x, pos.y);
                this.ctx.stroke();
            };
            const stop = () => this.isDrawing = false;

            this.canvas.addEventListener('mousedown', start);
            this.canvas.addEventListener('mousemove', move);
            this.canvas.addEventListener('mouseup', stop);
            this.canvas.addEventListener('touchstart', start);
            this.canvas.addEventListener('touchmove', move);
            this.canvas.addEventListener('touchend', stop);

            const clearBtn = document.getElementById('wa-clear-btn');
            if (clearBtn) {
                clearBtn.addEventListener('click', () => {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                });
            }
        }
    }

    handleCalcInput(val) {
        const display = document.getElementById('wa-calc-display');
        if (!display) return;

        if (val === 'C') {
            this.calcDisplayValue = "0";
        } else if (val === '=') {
            try {
                this.calcDisplayValue = eval(this.calcDisplayValue.replace(/×/g, '*').replace(/÷/g, '/')).toString();
            } catch (e) {
                this.calcDisplayValue = "Error";
            }
        } else if (val === 'sqrt') {
            try {
                this.calcDisplayValue = Math.sqrt(parseFloat(this.calcDisplayValue)).toString();
            } catch (e) {
                this.calcDisplayValue = "Error";
            }
        } else {
            if (this.calcDisplayValue === "0" || this.calcDisplayValue === "Error") {
                this.calcDisplayValue = val;
            } else {
                this.calcDisplayValue += val;
            }
        }
        display.value = this.calcDisplayValue;
    }

    resizeCanvas() {
        if (!this.canvas) return;
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = 350;
    }

    show() {
        if (!this.modal) this.createModalDOM();
        this.modal.style.display = 'flex';
        this.resizeCanvas();
    }

    hide() {
        if (this.modal) this.modal.style.display = 'none';
    }
}

window.WorkAreaScratchpad = WorkAreaScratchpad;
