document.addEventListener('DOMContentLoaded', () => {
    // ---- Constants and Default Data ----
    const DEFAULT_CMS = {
        heroTitleEn: 'Unlock Your Potential with <br><span class="gold-text">The Master Key</span>',
        heroTitleSi: 'The Master Key සමඟ ඔබේ <br><span class="gold-text">සැඟවුණු හැකියාවන්</span> අවදි කරන්න',
        heroDescEn: 'The ultimate guide to transforming your life. Discover the secrets to success, wealth, and happiness in one comprehensive book.',
        heroDescSi: 'ඔබේ ජීවිතය වෙනස් කරන අවසාන මගපෙන්වීම. සාර්ථකත්වය, ධනය සහ සතුට පිළිබඳ රහස් එක් සම්පූර්ණ පොතකින් සොයා ගන්න.',
        price: '1500',
        modalGuideEn: `<p><strong>Book</strong> - The Master Key<br>
<strong>Author</strong> - Dinuka Bandara</p>

<h4>1. What is this book and its scope?</h4>
<p>"The Master Key" is not just a series of business instructions. This is a journey to find the "Master Key" that awakens the limitless power hidden in your subconscious. This book relates the Law of Attraction, the power of thought, and Entrepreneurship into one unified guide.</p>

<h4>2. How is it different from other books?</h4>
<p>While many books discuss success, this book breaks down the realities that will act as the turning point of your life. It uniquely adapts deep philosophies like the Vyagghapajja Sutta, Mahamangala Sutta, Parabhava Sutta, and Dhammapada to the modern business world. It also clearly defines the difference between "Hard work" and "Inspired action".</p>

<h4>3. The biggest impact for a youth or student:</h4>
<p>If you are a youth, this book will help you break free from limiting beliefs (Negative Programs) like "Money doesn't grow on trees" placed in your mind by society. You will learn the secret of building your own business empire from scratch by trusting your dreams without fear and using the limitless power of the universe.</p>

<h4>4. How will this change your life?</h4>
<ul>
<li><strong>Beyond wishing:</strong> Transforms you from a "Wisher" to a "Believer".</li>
<li><strong>Changing your vibration:</strong> Learn scientifically how to match the vibration of your thoughts with success.</li>
<li><strong>Practical methods:</strong> Not just dreaming, but achieving physical results through the Power of Gratitude and Mental Rehearsal.</li>
<li><strong>Compass of success:</strong> Integrate practical management theories into your life.</li>
</ul>
<p style="margin-top: 25px; font-weight: 600; color: var(--gold); font-size: 1.1rem; line-height: 1.8;">Every line of this book is written to erase that little fear in your mind and teach you the secret of building your business from scratch using the limitless power of the universe. It is no coincidence that this book found its way to your hands; it might be the "right time" you've been waiting for. Read "The Master Key" today to start your life anew!</p>`,
        modalGuideSi: `<p><strong>පොත</strong> - The Master Key<br>
<strong>කර්තෘ</strong> - දිනුක බංඩාර</p>

<h4>1. මොකක්ද මේ පොත සහ එහි විෂය පථය?</h4>
<p>"The Master Key" කියන්නේ හුදෙක් ව්‍යාපාරික උපදෙස් මාලාවක් නෙවෙයි. මෙය ඔබේ යටිහිතේ සැඟවී ඇති අසීමිත ශක්තිය අවදි කරන "මහා යතුර" සොයා යන ගමනක්. විශ්වයේ ආකර්ෂණ නීතිය (Law of Attraction), සිතුවිලිවල බලය සහ ව්‍යවසායකත්වය (Entrepreneurship) කියන කරුණු එකිනෙකට සම්බන්ධ කරමින් ලියැවුණු මගපෙන්වීමක් විදියට මේ පොත හඳුන්වන්න පුළුවන්.</p>

<h4>2. අනෙක් පොත්වලින් වෙනස් වෙන්නේ කොහොමද?</h4>
<p>බොහෝ පොත් සාර්ථකත්වය ගැන කතා කළත්, මේ පොත ඔබේ ජීවිතයේ හැරවුම් ලක්ෂය සනිටුහන් කරන සත්‍යයන් සමූහයක් විග්‍රහ කරනවා. මෙහි විශේෂත්වය වෙන්නේ බුදු දහමේ එන ව්‍යග්ගපජ්ජ සූත්‍රය, මහාමංගල සූත්‍රය , පරාභව සුත්‍රය මෙන්ම දම්ම පදය වැනි ගැඹුරු දර්ශනයන් නූතන ව්‍යාපාරික ලෝකයට හා ජීවිතයට ගළපා ඇති ආකාරයයි. එමෙන්ම "හුදෙක් මහන්සි වීම" (Hard work) සහ "ප්‍රබෝධමත් ක්‍රියාව" (Inspired action) අතර වෙනස ඉතා පැහැදිලිව මෙහි දක්වා තිබෙනවා.</p>

<h4>3. තරුණයෙකුට හෝ ශිෂ්‍යයෙකුට මේ පොත කියවීමෙන් ලැබෙන ලොකුම වෙනස:</h4>
<p>ඔබ තරුණ වියේ පසුවන කෙනෙක් නම්, සමාජයෙන් ඔබේ ඔළුවට දාපු "සල්ලි කියන්නේ ගස්වල හැදෙන දෙයක් නෙවෙයි" වැනි සීමාකාරී සිතුවිලි (Negative Programs) බිඳ දමා නිදහස් මනසකින් ලෝකය දකින්න මේ පොත උදවු වෙනවා. තමන්ගේ හීන ගැන බය නැතිව විශ්වාසය තබමින්, විශ්වයේ අසීමිත ශක්තිය පාවිච්චි කරලා බිංදුවේ ඉඳන් තමන්ගේම ව්‍යාපාරික අධිරාජ්‍යයක් ගොඩනගන රහස මේ පොතෙන් ඉගෙන ගන්න පුළුවන්.</p>

<h4>4. මෙය ඔබේ ජීවිතය වෙනස් වෙන්නේ කොහොමද?</h4>
<ul>
<li><strong>පැතීමෙන් ඔබ්බට යන්න:</strong> ඔබ "පතන්නෙකු" (Wisher) වෙනුවට "විශ්වාස කරන්නෙකු" (Believer) බවට පත් කරනවා.</li>
<li><strong>කම්පන මට්ටම වෙනස් කිරීම:</strong> ඔබේ සිතුවිලිවල "Vibration" එක (කම්පනය) සාර්ථකත්වයට ගළපා ගන්නේ කොහොමද කියලා විද්‍යාත්මකව ඉගෙන ගත හැකියි.</li>
<li><strong>ප්‍රායෝගික ක්‍රමවේද:</strong> හුදෙක් සිහින දැකීම පමණක් නොව, කෘතඥතාවයේ බලය (Power of Gratitude) සහ මානසික පෙරහුරුව (Mental Rehearsal) හරහා භෞතික ප්‍රතිඵල ලබා ගන්නා ආකාරය මෙහි අඩංගුයි.</li>
<li><strong>සාර්ථකත්වයේ මාලිමාව:</strong> උට්ඨාන සම්පදා, ආරක්ඛ සම්පදා වැනි ප්‍රායෝගික කළමනාකරණ සිද්ධාන්ත ජීවිතයට එකතු කරගන්න ඔබට පුළුවන්.</li>
</ul>
<p style="margin-top: 25px; font-weight: 600; color: var(--gold); font-size: 1.1rem; line-height: 1.8;">මේ පොතේ සෑම පේළියක්ම ලියැවී ඇත්තේ ඔබේ හිතේ තියෙන ඒ පුංචි බිය නැති කරලා, විශ්වයේ අසීමිත ශක්තිය පාවිච්චි කරලා ඔබේ ව්‍යාපාරය බිංදුවේ ඉඳන් ගොඩනගන රහස කියා දෙන්නටයි. මෙම පොත ඔබේ අතට පත්වීම අහම්බයක් නෙවෙයි, එය ඔබ බලා සිටි ඒ "නිවැරදි වෙලාව" විය හැකියි. ඔබේ ජීවිතය අලුත් විදියකට ආරම්භ කරන්න අදම "The Master Key" කියවන්න.</p>`,
        modalDeliveryEn: `<p style="font-size: 1.2rem;">Get your hands on The Master Key anywhere in Sri Lanka within a few working days. We provide:<br><br>
<span style="font-size: 1.5rem;">✅</span> <strong>Cash on Delivery (COD)</strong><br><br>
<span style="font-size: 1.5rem;">✅</span> <strong>Sri Lanka Post</strong></p>`,
        modalDeliverySi: `<p style="font-size: 1.2rem;">ශ්‍රී ලංකාවේ ඕනෑම තැනකට දින කිහිපයක් ඇතුළත පොත ගෙන්වා ගන්න. පහසුකම්:<br><br>
<span style="font-size: 1.5rem;">✅</span> <strong>Cash on Delivery (COD)</strong><br><br>
<span style="font-size: 1.5rem;">✅</span> <strong>Sri Lanka Post</strong></p>`,
        modalOrderEn: `<p style="font-size: 1.15rem; line-height: 1.8;">Every line of this book is written to erase that little fear in your mind and teach you the secret of building your business from scratch using the limitless power of the universe.<br><br>Don't wait for success to come to you. Break the boundaries of your life today.</p>`,
        modalOrderSi: `<p style="font-size: 1.15rem; line-height: 1.8;">මේ පොතේ සෑම පේළියක්ම ලියැවී ඇත්තේ ඔබේ හිතේ තියෙන ඒ පුංචි බිය නැති කරලා, විශ්වයේ අසීමිත ශක්තිය පාවිච්චි කරලා ඔබේ ව්‍යාපාරය බිංදුවේ ඉඳන් ගොඩනගන රහස කියා දෙන්නටයි.<br><br>සාර්ථකත්වය ඔබ වෙත එනතුරු බලා නොසිටින්න. ඔබේ ජීවිතයේ සීමා මායිම් අදම බිඳ දමන්න.</p>`
    };

    // ---- Elements ----
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const btnLogin = document.getElementById('btn-login');
    const btnLogout = document.getElementById('btn-logout');
    const loginErr = document.getElementById('login-err');
    const usernameInput = document.getElementById('admin-user');
    const passwordInput = document.getElementById('admin-pass');

    // CMS inputs
    const inHeroTitleEn = document.getElementById('val-hero-title-en');
    const inHeroTitleSi = document.getElementById('val-hero-title-si');
    const inHeroDescEn = document.getElementById('val-hero-desc-en');
    const inHeroDescSi = document.getElementById('val-hero-desc-si');
    const inPrice = document.getElementById('val-price');
    
    const inGuideEn = document.getElementById('val-modal-guide-en');
    const inGuideSi = document.getElementById('val-modal-guide-si');
    const inDeliveryEn = document.getElementById('val-modal-delivery-en');
    const inDeliverySi = document.getElementById('val-modal-delivery-si');
    const inOrderEn = document.getElementById('val-modal-order-en');
    const inOrderSi = document.getElementById('val-modal-order-si');

    // ---- Admin Dashboard Loader ----
    const loadCmsDataToForm = () => {
        let storedData = localStorage.getItem('masterKeyCMS');
        let stored = storedData ? JSON.parse(storedData) : DEFAULT_CMS;

        // Populate Text Fields
        inHeroTitleEn.value = stored.heroTitleEn || '';
        inHeroTitleSi.value = stored.heroTitleSi || '';
        inHeroDescEn.value = stored.heroDescEn || '';
        inHeroDescSi.value = stored.heroDescSi || '';
        inPrice.value = stored.price || '';
        
        inGuideEn.value = stored.modalGuideEn !== undefined ? stored.modalGuideEn : DEFAULT_CMS.modalGuideEn;
        inGuideSi.value = stored.modalGuideSi !== undefined ? stored.modalGuideSi : DEFAULT_CMS.modalGuideSi;
        inDeliveryEn.value = stored.modalDeliveryEn !== undefined ? stored.modalDeliveryEn : DEFAULT_CMS.modalDeliveryEn;
        inDeliverySi.value = stored.modalDeliverySi !== undefined ? stored.modalDeliverySi : DEFAULT_CMS.modalDeliverySi;
        inOrderEn.value = stored.modalOrderEn !== undefined ? stored.modalOrderEn : DEFAULT_CMS.modalOrderEn;
        inOrderSi.value = stored.modalOrderSi !== undefined ? stored.modalOrderSi : DEFAULT_CMS.modalOrderSi;

        // Populate Hero Photos
        const heroPreviewContainer = document.getElementById('hero-preview');
        if (heroPreviewContainer) heroPreviewContainer.innerHTML = '';
        const savedHeroStr = localStorage.getItem('masterKeyHero');
        if (savedHeroStr && heroPreviewContainer) {
            try {
                const savedHeroArr = JSON.parse(savedHeroStr);
                if (Array.isArray(savedHeroArr)) {
                    savedHeroArr.forEach(base64 => {
                        const img = document.createElement('img');
                        img.src = base64;
                        heroPreviewContainer.appendChild(img);
                    });
                } else {
                    const img = document.createElement('img');
                    img.src = savedHeroStr;
                    heroPreviewContainer.appendChild(img);
                }
            } catch (e) {
                const img = document.createElement('img');
                img.src = savedHeroStr;
                heroPreviewContainer.appendChild(img);
            }
        }

        // Populate Guide Gallery
        const savedGuides = JSON.parse(localStorage.getItem('masterKeyGuides')) || [];
        const guideGallery = document.getElementById('guide-preview');
        if (guideGallery) {
            guideGallery.innerHTML = '';
            savedGuides.forEach(imgData => {
                const img = document.createElement('img');
                img.src = imgData;
                guideGallery.appendChild(img);
            });
        }
    };

    // ---- Fetch & Render Admin Feedbacks List ----
    window.deleteFeedbackAdmin = (index) => {
        if (confirm("Are you sure you want to permanently delete this feedback?")) {
            let feedbacks = JSON.parse(localStorage.getItem('masterKeyFeedbacks')) || [];
            feedbacks.splice(index, 1);
            localStorage.setItem('masterKeyFeedbacks', JSON.stringify(feedbacks));
            renderAdminFeedbacks(); // re-render
        }
    };

    const renderAdminFeedbacks = () => {
        const feedbacks = JSON.parse(localStorage.getItem('masterKeyFeedbacks')) || [];
        const container = document.getElementById('admin-feedbacks-list');
        if (!container) return;
        container.innerHTML = '';

        if (feedbacks.length === 0) {
            container.innerHTML = '<p style="color: gray;">No feedbacks found.</p>';
            return;
        }

        feedbacks.forEach((fb, index) => {
            let mediaText = '';
            if (fb.audio) mediaText += '🎵 Audio included ';
            if (fb.photos && fb.photos.length > 0) mediaText += `🖼️ ${fb.photos.length} Photo(s)`;

            const fbCard = document.createElement('div');
            fbCard.className = 'fb-card';
            fbCard.innerHTML = `
                <div class="fb-content">
                    <h4 style="color:#fff; margin-bottom: 5px;">${fb.name || 'Anonymous User'} <span style="color: var(--gold);">(${fb.rating} Stars)</span></h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 10px;">${new Date(fb.timestamp).toLocaleString()}</p>
                    <p style="color: #ddd; margin-bottom: 5px;">"${fb.comment}"</p>
                    <span style="font-size: 0.8rem; color: #888;">${mediaText}</span>
                </div>
                <button class="btn-delete" onclick="deleteFeedbackAdmin(${index})">Delete</button>
            `;
            container.appendChild(fbCard);
        });
    };

    // Initialize View
    const initSession = () => {
        if(sessionStorage.getItem('masterKeyAdmin') === 'true') {
            loginScreen.style.display = 'none';
            dashboardScreen.style.display = 'block';
            loadCmsDataToForm();
            renderAdminFeedbacks();
        } else {
            loginScreen.style.display = 'block';
            dashboardScreen.style.display = 'none';
        }
    };
    initSession();

    // ---- Interactions ----
    btnLogin.addEventListener('click', () => {
        if(usernameInput.value === 'dinukakey' && passwordInput.value === 'keymaster123') {
            sessionStorage.setItem('masterKeyAdmin', 'true');
            initSession();
        } else {
            loginErr.style.display = 'block';
        }
    });

    btnLogout.addEventListener('click', () => {
        sessionStorage.removeItem('masterKeyAdmin');
        initSession();
    });

    // Save Generic Texts
    document.getElementById('btn-save-texts').addEventListener('click', () => {
        let stored = JSON.parse(localStorage.getItem('masterKeyCMS')) || DEFAULT_CMS;
        stored.heroTitleEn = inHeroTitleEn.value;
        stored.heroTitleSi = inHeroTitleSi.value;
        stored.heroDescEn = inHeroDescEn.value;
        stored.heroDescSi = inHeroDescSi.value;
        stored.price = inPrice.value;
        localStorage.setItem('masterKeyCMS', JSON.stringify(stored));
        document.getElementById('text-save-status').style.display = 'inline-block';
        setTimeout(() => document.getElementById('text-save-status').style.display = 'none', 3000);
    });

    // Save Feature Cards Content
    document.getElementById('btn-save-modals').addEventListener('click', () => {
        let stored = JSON.parse(localStorage.getItem('masterKeyCMS')) || DEFAULT_CMS;
        stored.modalGuideEn = inGuideEn.value;
        stored.modalGuideSi = inGuideSi.value;
        stored.modalDeliveryEn = inDeliveryEn.value;
        stored.modalDeliverySi = inDeliverySi.value;
        stored.modalOrderEn = inOrderEn.value;
        stored.modalOrderSi = inOrderSi.value;
        localStorage.setItem('masterKeyCMS', JSON.stringify(stored));
        document.getElementById('modals-save-status').style.display = 'inline-block';
        setTimeout(() => document.getElementById('modals-save-status').style.display = 'none', 3000);
    });

    const fileToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const adminHeroUpload = document.getElementById('admin-hero-upload');
    document.getElementById('btn-save-hero').addEventListener('click', async () => {
        if (adminHeroUpload.files.length > 0) {
            const files = adminHeroUpload.files;
            if (files.length > 2) {
                alert("You can only upload up to 2 photos for the Hero section.");
                return;
            }
            let heroBase64Array = [];
            for (let i = 0; i < files.length; i++) {
                heroBase64Array.push(await fileToBase64(files[i]));
            }
            localStorage.setItem('masterKeyHero', JSON.stringify(heroBase64Array));
            loadCmsDataToForm();
            alert("Hero photo(s) successfully updated!");
        } else {
            alert("Please select image file(s) first.");
        }
    });

    document.getElementById('btn-clear-hero').addEventListener('click', () => {
        if(confirm("Are you sure you want to clear the hero photos?")) {
            localStorage.removeItem('masterKeyHero');
            loadCmsDataToForm();
            alert("Hero photos cleared.");
        }
    });

    const adminGuideUpload = document.getElementById('admin-guide-upload');
    document.getElementById('btn-add-guide').addEventListener('click', async () => {
        if (adminGuideUpload.files.length > 0) {
            const savedGuides = JSON.parse(localStorage.getItem('masterKeyGuides')) || [];
            for (let i = 0; i < adminGuideUpload.files.length; i++) {
                savedGuides.push(await fileToBase64(adminGuideUpload.files[i]));
            }
            localStorage.setItem('masterKeyGuides', JSON.stringify(savedGuides));
            loadCmsDataToForm(); 
            alert(adminGuideUpload.files.length + " guide photos added successfully!");
        } else {
            alert("Please select images first.");
        }
    });

    document.getElementById('btn-clear-guide').addEventListener('click', () => {
        if(confirm("Are you sure you want to clear all gallery photos?")) {
            localStorage.removeItem('masterKeyGuides');
            loadCmsDataToForm();
            alert("All gallery photos cleared.");
        }
    });

    const btnClearAllFeedbacks = document.getElementById('btn-clear-all-feedbacks');
    if (btnClearAllFeedbacks) {
        btnClearAllFeedbacks.addEventListener('click', () => {
            if(confirm("DANGER: Are you completely sure you want to delete ALL customer feedbacks? This action cannot be un-done.")) {
                localStorage.removeItem('masterKeyFeedbacks');
                renderAdminFeedbacks();
                alert("All feedbacks have been deleted.");
            }
        });
    }
});
