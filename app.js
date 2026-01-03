/* =========================================
   🎯 QUANTILE REGRESSION PRESENTATION
   Complete JavaScript - Fixed Version
   ========================================= */

// 📊 Complete Slides Data
const slides = [
    {
        id: 1,
        title: '🎓 رگرسیون کوانتایل',
        content: `
            <div style="text-align: center; padding: 3rem 0;">
                <h1 style="font-size: 3.5rem; margin-bottom: 2rem;">📊 رگرسیون کوانتایل و روش‌های ناپارامتری</h1>
                <h2 style="color: var(--primary); margin-bottom: 1.5rem;">🌟 ارائه کننده: امیرعلی ساتواتی</h2>
                <p style="font-size: 1.3rem; color: var(--text-secondary);">دانشگاه بیرجند | گروه آمار</p>
                <p style="margin-top: 2rem; font-size: 1.1rem;">📅 زمستان ۱۴۰۴</p>
            </div>
        `
    },
    {
        id: 2,
        title: '📋 فهرست مطالب',
        content: `
            <h2>🗂️ محتوای ارائه</h2>
            <ul style="font-size: 1.2rem; line-height: 2;">
                <li>🎯 <strong>مقدمه:</strong> چرا رگرسیون کوانتایل؟</li>
                <li>📐 <strong>پیشینه ریاضی:</strong> لاپلاس، Koenker & Bassett</li>
                <li>🔧 <strong>مکانیزم:</strong> تابع زیان و بهینه‌سازی</li>
                <li>📈 <strong>رگرسیون ناپارامتری:</strong> Local Linear، Splines</li>
                <li>⚠️ <strong>چالش‌ها:</strong> Crossing، Curse of Dimensionality</li>
                <li>🏥 <strong>کاربردها:</strong> درآمد، سلامت، محیط زیست، مالی</li>
                <li>🤖 <strong>یادگیری عمیق:</strong> Deep Quantile Regression</li>
                <li>🌲 <strong>Random Forest:</strong> Quantile Regression Forest</li>
                <li>📊 <strong>مثال عملی:</strong> آلودگی هوا</li>
            </ul>
        `
    },
    {
        id: 3,
        title: '🤔 چرا رگرسیون کوانتایل؟',
        content: `
            <h2>⚡ مشکل رگرسیون OLS</h2>
            <p>میانگین به شدت تحت تاثیر <strong>داده‌های پرت (Outliers)</strong> قرار می‌گیرد.</p>
            <p>❌ یک داده پرت می‌تواند کل تحلیل را خراب کند.</p>
            
            <h3 style="margin-top: 2rem;">✅ راه حل: رگرسیون کوانتایل</h3>
            <p>به جای برازش یک خط (میانگین)، ما <strong>چندین خط</strong> برای دهک‌های مختلف (مثل ۱۰٪، ۵۰٪، ۹۰٪) برازش می‌کنیم.</p>
            
            <div style="background: rgba(56, 189, 248, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
                <p style="margin: 0;">💡 <strong>نکته کلیدی:</strong> رگرسیون کوانتایل مقاوم به پرت است و توزیع کامل را نشان می‌دهد.</p>
            </div>
        `
    },
    {
        id: 4,
        title: '📊 پارامتری vs ناپارامتری',
        content: `
            <h2>🎯 تفاوت اساسی</h2>
            
            <h3>📐 رگرسیون پارامتری (مثلاً OLS)</h3>
            <ul>
                <li>فرض می‌کنیم داده‌ها از یک <strong>فرمول خاص</strong> (مثل خط راست) پیروی می‌کنند</li>
                <li>سریع و قابل تفسیر</li>
                <li>اما شاید واقعیت را درست نشان ندهد</li>
            </ul>
            
            <h3 style="margin-top: 2rem;">🌊 رگرسیون ناپارامتری</h3>
            <ul>
                <li>هیچ فرضی در مورد شکل تابع نداریم</li>
                <li>اجازه می‌دهیم <strong>داده‌ها خودشان</strong> شکل منحنی را بسازند</li>
                <li>انعطاف‌پذیر و واقع‌گرایانه</li>
            </ul>
            
            <div style="background: rgba(129, 140, 248, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
                <p style="margin: 0;">🎨 مدل‌های ناپارامتری الگوهای پنهانی را آشکار می‌کنند.</p>
            </div>
        `
    },
    {
        id: 5,
        title: '👨‍🔬 پیشگام: لاپلاس (۱۷۷۴)',
        content: `
            <h2>🎭 Pierre-Simon Laplace</h2>
            <p>او برای اولین بار پیشنهاد کرد که به جای "<strong>مجموع مربعات خطا</strong>" از "<strong>مجموع قدرمطلق خطاها</strong>" استفاده کنیم.</p>
            <p>این <strong>پدر رگرسیون کوانتایل</strong> است.</p>
            
            <h3 style="margin-top: 2rem;">🔑 کشف کلیدی</h3>
            <p>اگر خطاها از <strong>توزیع لاپلاس (دو-نمایی)</strong> پیروی کنند، <span style="color: var(--primary); font-weight: bold;">میانه (Median)</span> بهترین برآوردگر است، نه میانگین.</p>
            
            <div style="background: rgba(244, 114, 182, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
                <p style="margin: 0;">📐 <strong>فرمول:</strong> <code>minimize Σ|yi - β0 - β1xi|</code></p>
            </div>
        `
    },
    {
        id: 6,
        title: '🏆 انقلاب: Koenker & Bassett (۱۹۷۸)',
        content: `
            <h2>⚡ تولد رگرسیون کوانتایل مدرن</h2>
            <p>در سال ۱۹۷۸، آن‌ها مقاله انقلابی "<strong>Regression Quantiles</strong>" را منتشر کردند.</p>
            
            <h3>💡 ایده اصلی</h3>
            <p>گسترش مفهوم میانه به <strong>تمام صدک‌ها</strong> و حل مسئله با <strong>برنامه‌ریزی خطی</strong>.</p>
            
            <h3 style="margin-top: 2rem;">📊 تابع زیان (Loss Function)</h3>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 1.5rem; border-radius: 12px;">
                <p><strong>برای صدک τ:</strong></p>
                <code style="font-size: 1.1rem;">ρτ(u) = u × (τ - I(u < 0))</code>
                <p style="margin-top: 1rem;">این تابع <strong>نامتقارن</strong> است. برای صدک‌های بالا، کم‌برآورد کردن جریمه بیشتری دارد.</p>
            </div>
        `
    },
    {
        id: 7,
        title: '📐 تابع زیان چک (Pinball Loss)',
        content: `
            <h2>✅ ویژگی‌های تابع زیان</h2>
            <ul style="font-size: 1.15rem;">
                <li>📍 شبیه <strong>تیک (Checkmark)</strong> است</li>
                <li>⚖️ نامتقارن: وزن متفاوت برای خطای مثبت و منفی</li>
                <li>🎯 برای τ=0.5 → میانه</li>
                <li>📈 برای τ=0.9 → صدک ۹۰</li>
            </ul>
            
            <h3 style="margin-top: 2rem;">🔢 فرمول ریاضی</h3>
            <div style="background: rgba(56, 189, 248, 0.1); padding: 1.5rem; border-radius: 12px;">
                <p><code>ρτ(u) = { τu, if u ≥ 0 | (τ-1)u, if u < 0 }</code></p>
            </div>
            
            <p style="margin-top: 1.5rem;">💪 این تابع <strong>محدب (Convex)</strong> است، پس بهینه‌سازی آن آسان است!</p>
        `
    },
    {
        id: 8,
        title: '🔧 Local Linear QR',
        content: `
            <h2>🎯 ایده اصلی</h2>
            <p>برای برآورد مقدار در نقطه X، به <strong>نقاط نزدیک</strong> وزن بیشتری می‌دهیم.</p>
            
            <h3>⚙️ تابع کرنل (Kernel)</h3>
            <ul>
                <li>🔵 <strong>Gaussian:</strong> ناحیه نرم</li>
                <li>🟦 <strong>Epanechnikov:</strong> بهینه از نظر MSE</li>
                <li>🟪 <strong>Uniform:</strong> ساده اما ناپیوسته</li>
            </ul>
            
            <div style="background: rgba(129, 140, 248, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
                <h4>🎛️ پارامتر پهنای باند (Bandwidth)</h4>
                <p>❌ <strong>کوچک:</strong> واریانس بالا (Overfitting)</p>
                <p>✅ <strong>متوسط:</strong> تعادل بین بایاس و واریانس</p>
                <p>❌ <strong>بزرگ:</strong> بایاس بالا (Underfitting)</p>
            </div>
        `
    },
    {
        id: 9,
        title: '🌊 Smoothing Splines',
        content: `
            <h2>📏 تعریف</h2>
            <p>برازش <strong>تکه-تکه چندجمله‌ای‌ها</strong> که در <strong>گره‌ها (Knots)</strong> به نرمی به‌هم وصل می‌شوند.</p>
            
            <h3 style="margin-top: 2rem;">🎨 انواع Splines</h3>
            <ul style="font-size: 1.15rem;">
                <li>📐 <strong>Linear Spline:</strong> ساده اما گوشه‌دار</li>
                <li>🎯 <strong>Cubic Spline:</strong> نرم و طبیعی</li>
                <li>🌟 <strong>B-Spline:</strong> کنترل محلی و کارآمد</li>
                <li>⭐ <strong>Natural Cubic:</strong> خطی در انتهاها</li>
            </ul>
            
            <h3 style="margin-top: 2rem;">🔄 Penalized Splines</h3>
            <p>اضافه کردن <strong>جریمه نوسان</strong> به تابع هدف برای جلوگیری از پیچیدگی زیاد.</p>
            <div style="background: rgba(244, 114, 182, 0.1); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                <code>minimize: Σρτ(yi - f(xi)) + λ∫[f''(x)]² dx</code>
            </div>
        `
    },
    {
        id: 10,
        title: '⚠️ چالش: Crossing',
        content: `
            <h2>🚨 مشکل چیست؟</h2>
            <p>گاهی خط رگرسیون صدک ۹۰ <strong>پایین‌تر</strong> از صدک ۸۰ می‌افتد! این غیرممکن است.</p>
            
            <h3 style="margin-top: 2rem;">✅ راه حل</h3>
            <ul style="font-size: 1.15rem;">
                <li>🔒 <strong>Non-Crossing Constraints:</strong> قید ریاضی در بهینه‌سازی</li>
                <li>🧮 <strong>Rearrangement:</strong> مرتب‌سازی بعد از برازش</li>
                <li>📊 <strong>Joint Estimation:</strong> برآورد همزمان تمام صدک‌ها</li>
            </ul>
            
            <div style="background: rgba(239, 68, 68, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
                <p style="margin: 0;">⚡ <strong>نکته:</strong> در عمل، استفاده از regularization معمولاً کافی است.</p>
            </div>
        `
    },
    {
        id: 11,
        title: '🌀 Curse of Dimensionality',
        content: `
            <h2>🌌 مشکل ابعاد بالا</h2>
            <p>در روش‌های ناپارامتری، با افزایش تعداد متغیرها، داده‌ها در فضا بسیار <strong>پراکنده</strong> می‌شوند و دقت برآورد به شدت <strong>افت</strong> می‌کند.</p>
            
            <h3 style="margin-top: 2rem;">✅ راه حل: GAM</h3>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 1.5rem; border-radius: 12px;">
                <p><strong>فرمول:</strong> <code>y = f1(x1) + f2(x2) + ...</code></p>
                <p style="margin-top: 1rem;">این مدل‌ها هم <strong>انعطاف‌پذیر</strong> و هم <strong>قابل تفسیر</strong> هستند.</p>
            </div>
            
            <h3 style="margin-top: 2rem;">🤔 کی استفاده کنیم؟</h3>
            <p>وقتی تعداد متغیرها بالا است (بیشتر از ۵) و فکر می‌کنیم اثرات <strong>افزودنی</strong> هستند.</p>
        `
    },
    {
        id: 12,
        title: '💼 کاربرد: اقتصاد درآمد',
        content: `
            <h2>💰 سوال پژوهشی</h2>
            <p>آیا دانشگاه رفتن برای <strong>همه</strong> یکسان سود دارد؟</p>
            
            <h3 style="margin-top: 2rem;">📊 یافته‌ها</h3>
            <ul style="font-size: 1.15rem;">
                <li>📉 <strong>صدک ۱۰:</strong> اثر کم (+۵٪ درآمد)</li>
                <li>📊 <strong>صدک ۵۰:</strong> اثر متوسط (+۱۵٪)</li>
                <li>📈 <strong>صدک ۹۰:</strong> اثر زیاد (+۳۰٪)</li>
            </ul>
            
            <div style="background: rgba(56, 189, 248, 0.1); padding: 1.5rem; border-radius: 12px; margin-top: 1.5rem;">
                <p style="margin: 0;">💡 <strong>نتیجه:</strong> تحصیلات در دهک‌های بالای درآمدی <strong>بیشتر</strong> از دهک‌های پایین است.</p>
            </div>
        `
    },
    {
        id: 13,
        title: '🎓 نتیجه‌گیری',
        content: `
            <div style="text-align: center; padding: 2rem 0;">
                <h1 style="font-size: 2.5rem; margin-bottom: 2rem;">🎯 نکات کلیدی</h1>
                
                <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(129, 140, 248, 0.1)); padding: 2rem; border-radius: 20px; margin: 2rem 0;">
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">✅ یاد گرفتیم</h3>
                    <ul style="text-align: right; font-size: 1.2rem; line-height: 2;">
                        <li>📊 میانگین تمام داستان را نمی‌گوید</li>
                        <li>🎯 رگرسیون کوانتایل = دید کامل به توزیع</li>
                        <li>🌊 روش‌های ناپارامتری = انعطاف‌پذیری</li>
                        <li>🤖 ترکیب با ML = قدرت بیشتر</li>
                    </ul>
                </div>
                
                <h2 style="font-size: 2rem; margin-top: 2rem;">💫 با تشکر از توجه شما</h2>
                <p style="font-size: 1.3rem; margin-top: 1rem; color: var(--text-secondary);">سوال یا نظری دارید؟</p>
            </div>
        `
    }
];

let currentSlide = 0;
let isDrawing = false;
let drawingColor = '#ef4444';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initializing...');
    initSlides();
    initControls();
    initDrawing();
    initParticles();
    initClock();
    hideLoadingScreen();
});

function hideLoadingScreen() {
    setTimeout(() => {
        const loading = document.getElementById('loading-screen');
        if (loading) loading.classList.add('hidden');
    }, 1000);
}

function initSlides() {
    console.log('Initializing slides...', slides.length, 'slides found');
    if (slides.length > 0) {
        renderSlide(0);
        updateProgress();
    }
}

function renderSlide(index) {
    const container = document.getElementById('slide-container');
    if (!container) {
        console.error('Slide container not found!');
        return;
    }
    
    const slide = slides[index];
    if (!slide) {
        console.error('Slide not found at index:', index);
        return;
    }
    
    container.innerHTML = `
        <div class="slide" data-slide="${slide.id}">
            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--primary);">${slide.title}</h2>
            ${slide.content}
        </div>
    `;
    
    currentSlide = index;
    updateProgress();
    
    const slideNum = document.getElementById('current-slide-num');
    if (slideNum) slideNum.textContent = index + 1;
}

function updateProgress() {
    const total = slides.length;
    const current = document.getElementById('page-current');
    const totalEl = document.getElementById('page-total');
    
    if (current) current.textContent = currentSlide + 1;
    if (totalEl) totalEl.textContent = total;
    
    // Update progress ring
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (currentSlide / total) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
    }
}

function initControls() {
    // Navigation
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFirst = document.getElementById('btn-first');
    const btnLast = document.getElementById('btn-last');
    
    if (btnPrev) btnPrev.onclick = () => navigateSlide(-1);
    if (btnNext) btnNext.onclick = () => navigateSlide(1);
    if (btnFirst) btnFirst.onclick = () => renderSlide(0);
    if (btnLast) btnLast.onclick = () => renderSlide(slides.length - 1);
    
    // Tools
    const btnDraw = document.getElementById('btn-draw');
    const btnReset = document.getElementById('btn-reset');
    const btnFullscreen = document.getElementById('fullscreen-btn');
    const btnTheme = document.getElementById('theme-toggle');
    
    if (btnDraw) btnDraw.onclick = toggleDrawing;
    if (btnReset) btnReset.onclick = clearDrawing;
    if (btnFullscreen) btnFullscreen.onclick = toggleFullscreen;
    if (btnTheme) btnTheme.onclick = toggleTheme;
    
    // Keyboard
    document.addEventListener('keydown', handleKeyboard);
}

function navigateSlide(direction) {
    const newIndex = currentSlide + direction;
    if (newIndex >= 0 && newIndex < slides.length) {
        renderSlide(newIndex);
    }
}

function handleKeyboard(e) {
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
            navigateSlide(-1);
            break;
        case 'ArrowLeft':
        case 'ArrowDown':
            navigateSlide(1);
            break;
        case 'Home':
            renderSlide(0);
            break;
        case 'End':
            renderSlide(slides.length - 1);
            break;
    }
}

function initDrawing() {
    const canvas = document.getElementById('drawing-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let drawing = false;
    
    canvas.addEventListener('mousedown', (e) => {
        if (!isDrawing) return;
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!drawing || !isDrawing) return;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = drawingColor;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
    });
    
    canvas.addEventListener('mouseup', () => {
        drawing = false;
    });
}

function toggleDrawing() {
    isDrawing = !isDrawing;
    const canvas = document.getElementById('drawing-canvas');
    const btn = document.getElementById('btn-draw');
    
    if (canvas) canvas.classList.toggle('active', isDrawing);
    if (btn) btn.classList.toggle('active', isDrawing);
    
    showToast(isDrawing ? 'حالت نقاشی فعال شد' : 'حالت نقاشی غیرفعال شد');
}

function clearDrawing() {
    const canvas = document.getElementById('drawing-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    showToast('نقاشی پاک شد');
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    }
}

function initClock() {
    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('fa-IR');
        const clockEl = document.getElementById('clock-display');
        if (clockEl) clockEl.textContent = time;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 30;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
}

console.log('App loaded successfully!');
