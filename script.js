// Global function to copy WhatsApp number
window.copyToClipboard = function(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied!";
        btnElement.style.color = "#4caf50";
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.style.color = "#aaa";
        }, 2000);
    });
};

document.addEventListener('DOMContentLoaded', () => {

    // Default CMS data fallback
    const DEFAULT_CMS = {
        heroTitleEn: 'Unlock Your Potential with <br><span class="gold-text">The Master Key</span>',
        heroTitleSi: 'The Master Key සමඟ ඔබේ <br><span class="gold-text">සැඟවුණු හැකියාවන්</span> අවදි කරන්න',
        heroDescEn: 'The ultimate guide to transforming your life. Discover the secrets to success, wealth, and happiness in one comprehensive book.',
        heroDescSi: 'ඔබේ ජීවිතය වෙනස් කරන අවසාන මගපෙන්වීම. සාර්ථකත්වය, ධනය සහ සතුට පිළිබඳ රහස් එක් සම්පූර්ණ පොතකින් සොයා ගන්න.',
        price: '1500',
        modalGuideEn: `<p><strong>Book</strong> - The Master Key<br><strong>Author</strong> - Dinuka Bandara</p><h4>1. What is this book and its scope?</h4><p>"The Master Key" is not just a series of business instructions. This is a journey to find the "Master Key" that awakens the limitless power hidden in your subconscious. This book relates the Law of Attraction, the power of thought, and Entrepreneurship into one unified guide.</p><h4>2. How is it different from other books?</h4><p>While many books discuss success, this book breaks down the realities that will act as the turning point of your life. It uniquely adapts deep philosophies like the Vyagghapajja Sutta, Mahamangala Sutta, Parabhava Sutta, and Dhammapada to the modern business world. It also clearly defines the difference between "Hard work" and "Inspired action".</p><h4>3. The biggest impact for a youth or student:</h4><p>If you are a youth, this book will help you break free from limiting beliefs (Negative Programs) like "Money doesn't grow on trees" placed in your mind by society. You will learn the secret of building your own business empire from scratch by trusting your dreams without fear and using the limitless power of the universe.</p><h4>4. How will this change your life?</h4><ul><li><strong>Beyond wishing:</strong> Transforms you from a "Wisher" to a "Believer".</li><li><strong>Changing your vibration:</strong> Learn scientifically how to match the vibration of your thoughts with success.</li><li><strong>Practical methods:</strong> Not just dreaming, but achieving physical results through the Power of Gratitude and Mental Rehearsal.</li><li><strong>Compass of success:</strong> Integrate practical management theories into your life.</li></ul><p style="margin-top: 25px; font-weight: 600; color: var(--gold); font-size: 1.1rem; line-height: 1.8;">Every line of this book is written to erase that little fear in your mind and teach you the secret of building your business from scratch using the limitless power of the universe. It is no coincidence that this book found its way to your hands; it might be the "right time" you've been waiting for. Read "The Master Key" today to start your life anew!</p>`,
        modalGuideSi: `<p><strong>පොත</strong> - The Master Key<br><strong>කර්තෘ</strong> - දිනුක බංඩාර</p><h4>1. මොකක්ද මේ පොත සහ එහි විෂය පථය?</h4><p>"The Master Key" කියන්නේ හුදෙක් ව්‍යාපාරික උපදෙස් මාලාවක් නෙවෙයි. මෙය ඔබේ යටිහිතේ සැඟවී ඇති අසීමිත ශක්තිය අවදි කරන "මහා යතුර" සොයා යන ගමනක්. විශ්වයේ ආකර්ෂණ නීතිය (Law of Attraction), සිතුවිලිවල බලය සහ ව්‍යවසායකත්වය (Entrepreneurship) කියන කරුණු එකිනෙකට සම්බන්ධ කරමින් ලියැවුණු මගපෙන්වීමක් විදියට මේ පොත හඳුන්වන්න පුළුවන්.</p><h4>2. අනෙක් පොත්වලින් වෙනස් වෙන්නේ කොහොමද?</h4><p>බොහෝ පොත් සාර්ථකත්වය ගැන කතා කළත්, මේ පොත ඔබේ ජීවිතයේ හැරවුම් ලක්ෂය සනිටුහන් කරන සත්‍යයන් සමූහයක් විග්‍රහ කරනවා. මෙහි විශේෂත්වය වෙන්නේ බුදු දහමේ එන ව්‍යග්ගපජ්ජ සූත්‍රය, මහාමංගල සූත්‍රය , පරාභව සුත්‍රය මෙන්ම දම්ම පදය වැනි ගැඹුරු දර්ශනයන් නූතන ව්‍යාපාරික ලෝකයට හා ජීවිතයට ගළපා ඇති ආකාරයයි. එමෙන්ම "හුදෙක් මහන්සි වීම" (Hard work) සහ "ප්‍රබෝධමත් ක්‍රියාව" (Inspired action) අතර වෙනස ඉතා පැහැදිලිව මෙහි දක්වා තිබෙනවා.</p><h4>3. තරුණයෙකුට හෝ ශිෂ්‍යයෙකුට මේ පොත කියවීමෙන් ලැබෙන ලොකුම වෙනස:</h4><p>ඔබ තරුණ වියේ පසුවන කෙනෙක් නම්, සමාජයෙන් ඔබේ ඔළුවට දාපු "සල්ලි කියන්නේ ගස්වල හැදෙන දෙයක් නෙවෙයි" වැනි සීමාකාරී සිතුවිලි (Negative Programs) බිඳ දමා නිදහස් මනසකින් ලෝකය දකින්න මේ පොත උදවු වෙනවා. තමන්ගේ හීන ගැන බය නැතිව විශ්වාසය තබමින්, විශ්වයේ අසීමිත ශක්තිය පාවිච්චි කරලා බිංදුවේ ඉඳන් තමන්ගේම ව්‍යාපාරික අධිරාජ්‍යයක් ගොඩනගන රහස මේ පොතෙන් ඉගෙන ගන්න පුළුවන්.</p><h4>4. මෙය ඔබේ ජීවිතය වෙනස් වෙන්නේ කොහොමද?</h4><ul><li><strong>පැතීමෙන් ඔබ්බට යන්න:</strong> ඔබ "පතන්නෙකු" (Wisher) වෙනුවට "විශ්වාස කරන්නෙකු" (Believer) බවට පත් කරනවා.</li><li><strong>කම්පන මට්ටම වෙනස් කිරීම:</strong> ඔබේ සිතුවිලිවල "Vibration" එක (කම්පනය) සාර්ථකත්වයට ගළපා ගන්නේ කොහොමද කියලා විද්‍යාත්මකව ඉගෙන ගත හැකියි.</li><li><strong>ප්‍රායෝගික ක්‍රමවේද:</strong> හුදෙක් සිහින දැකීම පමණක් නොව, කෘතඥතාවයේ බලය (Power of Gratitude) සහ මානසික පෙරහුරුව (Mental Rehearsal) හරහා භෞතික ප්‍රතිඵල ලබා ගන්නා ආකාරය මෙහි අඩංගුයි.</li><li><strong>සාර්ථකත්වයේ මාලිමාව:</strong> උට්ඨාන සම්පදා, ආරක්ඛ සම්පදා වැනි ප්‍රායෝගික කළමනාකරණ සිද්ධාන්ත ජීවිතයට එකතු කරගන්න ඔබට පුළුවන්.</li></ul><p style="margin-top: 25px; font-weight: 600; color: var(--gold); font-size: 1.1rem; line-height: 1.8;">මේ පොතේ සෑම පේළියක්ම ලියැවී ඇත්තේ ඔබේ හිතේ තියෙන ඒ පුංචි බිය නැති කරලා, විශ්වයේ අසීමිත ශක්තිය පාවිච්චි කරලා ඔබේ ව්‍යාපාරය බිංදුවේ ඉඳන් ගොඩනගන රහස කියා දෙන්නටයි. මෙම පොත ඔබේ අතට පත්වීම අහම්බයක් නෙවෙයි, එය ඔබ බලා සිටි ඒ "නිවැරදි වෙලාව" විය හැකියි. ඔබේ ජීවිතය අලුත් විදියකට ආරම්භ කරන්න අදම "The Master Key" කියවන්න.</p>`,
        modalDeliveryEn: `<p style="font-size: 1.2rem;">Get your hands on The Master Key anywhere in Sri Lanka within a few working days. We provide:<br><br><span style="font-size: 1.5rem;">✅</span> <strong>Cash on Delivery (COD)</strong><br><br><span style="font-size: 1.5rem;">✅</span> <strong>Sri Lanka Post</strong></p>`,
        modalDeliverySi: `<p style="font-size: 1.2rem;">ශ්‍රී ලංකාවේ ඕනෑම තැනකට දින කිහිපයක් ඇතුළත පොත ගෙන්වා ගන්න. පහසුකම්:<br><br><span style="font-size: 1.5rem;">✅</span> <strong>Cash on Delivery (COD)</strong><br><br><span style="font-size: 1.5rem;">✅</span> <strong>Sri Lanka Post</strong></p>`,
        modalOrderEn: `<p style="font-size: 1.15rem; line-height: 1.8;">Every line of this book is written to erase that little fear in your mind and teach you the secret of building your business from scratch using the limitless power of the universe.<br><br>Don't wait for success to come to you. Break the boundaries of your life today.</p>`,
        modalOrderSi: `<p style="font-size: 1.15rem; line-height: 1.8;">මේ පොතේ සෑම පේළියක්ම ලියැවී ඇත්තේ ඔබේ හිතේ තියෙන ඒ පුංචි බිය නැති කරලා, විශ්වයේ අසීමිත ශක්තිය පාවිච්චි කරලා ඔබේ ව්‍යාපාරය බිංදුවේ ඉඳන් ගොඩනගන රහස කියා දෙන්නටයි.<br><br>සාර්ථකත්වය ඔබ වෙත එනතුරු බලා නොසිටින්න. ඔබේ ජීවිතයේ සීමා මායිම් අදම බිඳ දමන්න.</p>`
    };
    
    // ---- CMS DATA INJECTION ----
    const loadCmsDataToSite = () => {
        const storedStr = localStorage.getItem('masterKeyCMS');
        const stored = storedStr ? JSON.parse(storedStr) : DEFAULT_CMS;

        if(document.getElementById('cms-hero-title-en')) document.getElementById('cms-hero-title-en').innerHTML = stored.heroTitleEn !== undefined ? stored.heroTitleEn : DEFAULT_CMS.heroTitleEn;
        if(document.getElementById('cms-hero-title-si')) document.getElementById('cms-hero-title-si').innerHTML = stored.heroTitleSi !== undefined ? stored.heroTitleSi : DEFAULT_CMS.heroTitleSi;
        if(document.getElementById('cms-hero-desc-en')) document.getElementById('cms-hero-desc-en').innerHTML = stored.heroDescEn !== undefined ? stored.heroDescEn : DEFAULT_CMS.heroDescEn;
        if(document.getElementById('cms-hero-desc-si')) document.getElementById('cms-hero-desc-si').innerHTML = stored.heroDescSi !== undefined ? stored.heroDescSi : DEFAULT_CMS.heroDescSi;
        if(document.getElementById('cms-price-text')) document.getElementById('cms-price-text').innerText = stored.price !== undefined ? stored.price : DEFAULT_CMS.price;
        
        // Feature cards injection
        if(document.getElementById('cms-guide-en')) document.getElementById('cms-guide-en').innerHTML = stored.modalGuideEn !== undefined ? stored.modalGuideEn : DEFAULT_CMS.modalGuideEn;
        if(document.getElementById('cms-guide-si')) document.getElementById('cms-guide-si').innerHTML = stored.modalGuideSi !== undefined ? stored.modalGuideSi : DEFAULT_CMS.modalGuideSi;
        if(document.getElementById('cms-delivery-en')) document.getElementById('cms-delivery-en').innerHTML = stored.modalDeliveryEn !== undefined ? stored.modalDeliveryEn : DEFAULT_CMS.modalDeliveryEn;
        if(document.getElementById('cms-delivery-si')) document.getElementById('cms-delivery-si').innerHTML = stored.modalDeliverySi !== undefined ? stored.modalDeliverySi : DEFAULT_CMS.modalDeliverySi;
        if(document.getElementById('cms-order-en')) document.getElementById('cms-order-en').innerHTML = stored.modalOrderEn !== undefined ? stored.modalOrderEn : DEFAULT_CMS.modalOrderEn;
        if(document.getElementById('cms-order-si')) document.getElementById('cms-order-si').innerHTML = stored.modalOrderSi !== undefined ? stored.modalOrderSi : DEFAULT_CMS.modalOrderSi;

        // Render Hero Image(s) logic (Support 1 or 2 images)
        const savedHeroStr = localStorage.getItem('masterKeyHero');
        const heroWrapper = document.querySelector('.hero-image-placeholder');
        
        if (savedHeroStr && heroWrapper) {
            try {
                const savedHeroArr = JSON.parse(savedHeroStr);
                heroWrapper.innerHTML = ''; // clear initial placeholder
                
                if (Array.isArray(savedHeroArr)) {
                    if (savedHeroArr.length === 1) {
                        heroWrapper.innerHTML = `<img src="${savedHeroArr[0]}" alt="Hero Book" style="width: 100%; max-width: 350px; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(212,175,55,0.3); border: 2px solid var(--gold);">`;
                    } else if (savedHeroArr.length >= 2) {
                        heroWrapper.innerHTML = `
                            <div style="position: relative; width: 100%; max-width: 400px; height: 380px;">
                                <img src="${savedHeroArr[1]}" alt="Book Back" style="position: absolute; bottom: 0; right: 0; width: 220px; z-index: 1; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.6); border: 2px solid var(--gold-dim); transform: scale(0.9);">
                                <img src="${savedHeroArr[0]}" alt="Book Front" style="position: absolute; top:0; left: 0; width: 250px; z-index: 2; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); border: 2px solid var(--gold);">
                            </div>
                        `;
                    }
                } else {
                     heroWrapper.innerHTML = `<img src="${savedHeroStr}" alt="Hero Book" style="width: 100%; max-width: 350px; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(212,175,55,0.3); border: 2px solid var(--gold);">`;
                }
            } catch (e) {
                // If parsing fails (legacy string)
                heroWrapper.innerHTML = `<img src="${savedHeroStr}" alt="Hero Book" style="width: 100%; max-width: 350px; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(212,175,55,0.3); border: 2px solid var(--gold);">`;
            }
        }

        const savedGuides = JSON.parse(localStorage.getItem('masterKeyGuides')) || [];
        const contentGuide = document.getElementById('content-guide');
        if (contentGuide) {
            const galleryTarget = contentGuide.querySelector('#dynamic-guide-gallery');
            if (galleryTarget) {
                galleryTarget.innerHTML = '';
                savedGuides.forEach(imgData => {
                    const img = document.createElement('img');
                    img.src = imgData;
                    img.style.cssText = "width: 150px; height: 150px; object-fit: cover; border-radius: 10px; border: 2px solid var(--gold); background: #222;";
                    galleryTarget.appendChild(img);
                });
            }
        }
    };
    loadCmsDataToSite();

    // ---- 1. LANGUAGE TOGGLE LOGIC ----
    const btnEn = document.getElementById('btn-en');
    const btnSi = document.getElementById('btn-si');
    
    function setLanguage(lang) {
        const enElements = document.querySelectorAll('.lang-en');
        const siElements = document.querySelectorAll('.lang-si');
        
        if (lang === 'en') {
            enElements.forEach(el => el.style.display = '');
            siElements.forEach(el => el.style.display = 'none');
            btnEn.classList.add('active');
            btnSi.classList.remove('active');
            document.body.classList.remove('lang-si-active');
        } else {
            enElements.forEach(el => el.style.display = 'none');
            siElements.forEach(el => el.style.display = '');
            btnSi.classList.add('active');
            btnEn.classList.remove('active');
            document.body.classList.add('lang-si-active');
        }
    }

    if(btnEn && btnSi) {
        btnEn.addEventListener('click', () => setLanguage('en'));
        btnSi.addEventListener('click', () => setLanguage('si'));
        setLanguage('en'); 
    }

    // ---- 2. CARDS MODAL SYSTEM ----
    const modals = document.querySelectorAll('.clickable-card');
    const modalOverlay = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    if(modals.length > 0) {
        modals.forEach(card => {
            card.addEventListener('click', () => {
                const modalId = card.getAttribute('data-modal');
                const content = document.getElementById('content-' + modalId).innerHTML;
                modalBody.innerHTML = content;
                
                const currentLang = document.body.classList.contains('lang-si-active') ? 'si' : 'en';
                setLanguage(currentLang);
                
                modalOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden'; 
            });
        });

        const closePopup = () => {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = '';
            modalBody.innerHTML = '';
        };

        if(closeModal) closeModal.addEventListener('click', closePopup);
        if(modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closePopup();
            });
        }
    }

    // ---- Helper: file to Base64 ----
    const fileToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    // ---- 4. STAR RATING SYSTEM ----
    const stars = document.querySelectorAll('#star-rating span');
    const ratingValue = document.getElementById('rating-value');

    if(stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const val = parseInt(star.getAttribute('data-value'));
                ratingValue.value = val;
                stars.forEach(s => {
                    s.style.color = parseInt(s.getAttribute('data-value')) <= val ? 'var(--gold)' : '#444';
                });
            });
        });
    }

    // ---- 5. LIVE VOICE RECORDING SYSTEM ----
    const recordBtn = document.getElementById('record-btn');
    const stopBtn = document.getElementById('stop-btn');
    const recordStatus = document.getElementById('record-status');
    const previewAudio = document.getElementById('preview-audio');
    
    let mediaRecorder;
    let audioChunks = [];
    let recordedAudioBase64 = null;

    if(recordBtn) {
        recordBtn.addEventListener('click', async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];

                mediaRecorder.ondataavailable = event => {
                    if (event.data.size > 0) audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    previewAudio.src = audioUrl;
                    previewAudio.style.display = 'block';
                    
                    const reader = new FileReader();
                    reader.readAsDataURL(audioBlob);
                    reader.onloadend = () => { recordedAudioBase64 = reader.result; };
                };

                mediaRecorder.start();
                recordBtn.style.display = 'none';
                stopBtn.style.display = 'inline-block';
                recordStatus.innerText = "Recording... 🔴";
                recordStatus.style.animation = "pulse 1s infinite alternate";
                
                if (!document.getElementById('pulse-anim')) {
                    const style = document.createElement('style');
                    style.id = 'pulse-anim';
                    style.innerHTML = `@keyframes pulse { from { opacity: 1; } to { opacity: 0.5; } }`;
                    document.head.appendChild(style);
                }
            } catch (err) {
                alert("Error accessing microphone: " + err);
            }
        });
    }

    if(stopBtn) {
        stopBtn.addEventListener('click', () => {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
                stopBtn.style.display = 'none';
                recordBtn.style.display = 'inline-block';
                recordBtn.innerText = "🎤 Re-record";
                recordStatus.innerText = "Audio ready.";
                recordStatus.style.animation = "";
            }
        });
    }

    // ---- 6. CUSTOMER FEEDBACK SUBMISSION & RENDER ----
    const renderFeedbacks = () => {
        const feedbacks = JSON.parse(localStorage.getItem('masterKeyFeedbacks')) || [];
        const reviewsContainer = document.getElementById('existing-feedbacks-list');
        if(!reviewsContainer) return;
        reviewsContainer.innerHTML = '';

        feedbacks.reverse().forEach(fb => {
            const div = document.createElement('div');
            div.style.cssText = "background: rgba(255,255,255,0.02); padding: 30px; border-radius: 15px; border-left: 5px solid var(--gold); box-shadow: 0 5px 15px rgba(0,0,0,0.3);";
            
            // Stars generator
            let starsHtml = '';
            for(let i=1; i<=5; i++) { starsHtml += (i <= fb.rating) ? '&#9733;' : '&#9734;'; }

            // Audio Player
            let audioHtml = '';
            if (fb.audio) {
                audioHtml = `
                <div style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="color: var(--gold); font-size: 1.2rem;">🎙️</span>
                    <audio controls style="height: 35px; width: 100%; max-width: 300px; border-radius: 10px;">
                        <source src="${fb.audio}" type="audio/webm">
                    </audio>
                </div>`;
            }

            // Photos Gallery
            let photosHtml = '';
            if (fb.photos && fb.photos.length > 0) {
                photosHtml = `<div style="display: flex; gap: 15px; flex-wrap: wrap;">`;
                fb.photos.forEach(p => {
                    photosHtml += `<img src="${p}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 5px; border: 1px solid var(--card-border);">`;
                });
                photosHtml += `</div>`;
            }

            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <strong style="color: #fff; font-size: 1.2rem;">${fb.name || 'Anonymous User'}</strong>
                    <div style="color: var(--gold); font-size: 1.2rem;">${starsHtml}</div>
                </div>
                <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem; line-height: 1.6;">${fb.comment}</p>
                ${audioHtml}
                ${photosHtml}
            `;
            reviewsContainer.appendChild(div);
        });
    };
    renderFeedbacks(); // Load on start

    // Submit Action
    const submitEn = document.getElementById('submit-feedback-en');
    const submitSi = document.getElementById('submit-feedback-si');

    const handleFeedbackSubmit = async () => {
        const name = document.getElementById('reviewer-name').value;
        const comment = document.getElementById('feedback-comment').value;
        const rating = parseInt(document.getElementById('rating-value').value);
        
        if (!comment) {
            alert("Please write a comment!");
            return;
        }

        const photoInput = document.getElementById('feedback-photo');
        let uploadPhotos = [];
        if (photoInput.files.length > 0) {
            for (let i = 0; i < photoInput.files.length; i++) {
                const base64 = await fileToBase64(photoInput.files[i]);
                uploadPhotos.push(base64);
            }
        }

        const newFeedback = {
            name: name,
            comment: comment,
            rating: rating,
            audio: recordedAudioBase64,
            photos: uploadPhotos,
            timestamp: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('masterKeyFeedbacks')) || [];
        existing.push(newFeedback);
        localStorage.setItem('masterKeyFeedbacks', JSON.stringify(existing));

        // Reset Form
        document.getElementById('review-form').reset();
        ratingValue.value = 5;
        stars.forEach(s => s.style.color = 'var(--gold)');
        recordedAudioBase64 = null;
        if(previewAudio) previewAudio.style.display = 'none';
        if(recordBtn) recordBtn.innerText = "🎤 Record";
        if(recordStatus) recordStatus.innerText = "";
        
        renderFeedbacks();
        alert("Thanks for your review! It has been posted successfully.");
    };


    if (submitEn) submitEn.addEventListener('click', handleFeedbackSubmit);
    if (submitSi) submitSi.addEventListener('click', handleFeedbackSubmit);

    // ---- 7. FULL SCREEN IMAGE VIEWER LOGIC ----
    const viewerModal = document.getElementById('image-viewer-modal');
    const viewerImg = document.getElementById('image-viewer-img');
    const closeViewerBtn = document.getElementById('close-image-viewer');

    if (viewerModal && viewerImg) {
        // Global listener for dynamic and static images
        document.body.addEventListener('click', (e) => {
            // Check if clicked element is an image and inside one of these containers
            if (e.target.tagName === 'IMG' && 
                (e.target.closest('.hero-image-placeholder') || 
                 e.target.closest('#dynamic-guide-gallery') || 
                 e.target.closest('.existing-feedbacks'))) 
            {
                viewerImg.src = e.target.src;
                viewerModal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // prevent scrolling
            }
        });

        // Close logic
        const closeViewer = () => {
            viewerModal.style.display = 'none';
            viewerImg.src = '';
            document.body.style.overflow = '';
        };

        if (closeViewerBtn) closeViewerBtn.addEventListener('click', closeViewer);
        viewerModal.addEventListener('click', (e) => {
            if (e.target === viewerModal) closeViewer();
        });
    }

});
