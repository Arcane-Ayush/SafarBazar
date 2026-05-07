const state = {
    currentView: 'splash',
    role: 'buyer',
    businessType: null,
    setupType: null,
    howToStart: null,
    welcomeSlide: 0,
    welcomeInterval: null,
    isInternational: false,
    brandHelpExpanded: 'core',
    history: [],
    showRefurbishedItems: false,
    activeChatId: null,
    chats: {
        'premium_fitness': {
            id: 'premium_fitness',
            name: 'Premium Fitness Solutions',
            avatar: 'PF',
            avatarBg: '#D0F0E0',
            avatarColor: '#005528',
            subtitle: 'Vendor · Noida, UP',
            lastSeen: 'Active 2h ago',
            messages: [
                { from: 'them', text: 'Hello! Thank you for your interest in our fitness setup solutions.', time: '10:22 AM' },
                { from: 'them', text: 'We offer complete turnkey gym setups starting from ₹30 Lakhs. Would you like to schedule a call?', time: '10:23 AM' },
                { from: 'me', text: 'Hi! Yes, I am interested. Can you share your brochure?', time: '10:35 AM' },
                { from: 'them', text: 'Sure! I am sending it across on your email. What city are you planning to set up?', time: '10:37 AM' },
            ]
        },
        'fittech': {
            id: 'fittech',
            name: 'FitTech Equipments',
            avatar: 'FT',
            avatarBg: '#E0E8FF',
            avatarColor: '#3730A3',
            subtitle: 'Vendor · Delhi NCR',
            lastSeen: 'Active 5h ago',
            messages: [
                { from: 'them', text: 'Hi there! We specialize in cardio machines and strength equipment.', time: 'Yesterday' },
                { from: 'me', text: 'What is the minimum order quantity?', time: 'Yesterday' },
                { from: 'them', text: 'No minimum! We cater to all gym sizes. Our packages start from ₹15L.', time: 'Yesterday' },
            ]
        },
        'progym': {
            id: 'progym',
            name: 'ProGym Makers',
            avatar: 'PG',
            avatarBg: '#FEF3C7',
            avatarColor: '#92400E',
            subtitle: 'Vendor · Mumbai, MH',
            lastSeen: 'Active now',
            messages: [
                { from: 'them', text: 'We just launched a new CrossFit zone package. Interested?', time: '9:00 AM' },
            ]
        }
    }
};

const views = {
    splash: () => `
        <div class="onboarding-screen" style="background: var(--primary); display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
            <div id="splash-logo" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; font-size: 48px; font-weight: 700; color: #10B981; margin-bottom: 8px; letter-spacing: -1px; transform-origin: center;">
                <div>Safar</div>
                <div>Bazaar</div>
            </div>
        </div>
    `,
    welcome: () => `
        <div class="onboarding-screen">
            <div class="top-half" style="display: flex; align-items: center; justify-content: flex-start; background: var(--primary); padding-top: 50px;">
                <div style="font-size: 32px; font-weight: 700; color: #10B981;">Safar Bazaar</div>
            </div>
            <div class="bottom-half" style="position: relative; overflow: hidden; padding: 0;">
                <div id="welcome-track" style="display: flex; width: 300%; transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);" ontouchstart="handleTouchStart(event)" ontouchend="handleTouchEnd(event)">
                    <div style="width: 33.333%; padding: 30px 20px; display: flex; flex-direction: column;">
                        <h2 style="font-size: 32px; margin-bottom: 12px; line-height: 1.2;">Grow Your Business<br>Across India</h2>
                        <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">Connect with verified vendors, find franchise opportunity and expand your network.</p>
                    </div>
                    <div style="width: 33.333%; padding: 30px 20px; display: flex; flex-direction: column;">
                        <h2 style="font-size: 32px; margin-bottom: 12px; line-height: 1.2;">Get 500+ Verified<br>Vendors</h2>
                        <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">All vendors are fully verified and background check before listing</p>
                    </div>
                    <div style="width: 33.333%; padding: 30px 20px; display: flex; flex-direction: column;">
                        <h2 style="font-size: 32px; margin-bottom: 12px; line-height: 1.2;">Get Full PAN India<br>Network</h2>
                        <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">Have active presence across all 28 states and union territory</p>
                    </div>
                </div>
                
                <div style="position: absolute; bottom: 30px; left: 20px; right: 20px;">
                    <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 30px;">
                        <div id="dot-0" class="dot active"></div>
                        <div id="dot-1" class="dot"></div>
                        <div id="dot-2" class="dot"></div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <button class="btn btn-primary" onclick="navigateTo('signup')">Sign Up</button>
                        <button class="btn btn-secondary" onclick="navigateTo('login')">Login</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    signup: () => `
        <div class="onboarding-screen" style="background: white; display: flex; flex-direction: column; position: relative;">
            <i class="ph ph-caret-left screen-back-btn" onclick="goBack()"></i>
            <div style="padding: 72px 20px 34px; text-align: center;">
                <h1 style="font-size: 32px; font-weight: 700;">Sign Up</h1>
            </div>
            <div style="padding: 12px 20px 30px; flex: 1; display: flex; flex-direction: column;">
                <div id="signup-error" style="display:none; background:#FEE2E2; color:#DC2626; padding:12px 16px; border-radius:12px; font-size:13px; margin-bottom:12px;"></div>
                <div class="toggle-row">
                    <div style="display: flex; align-items: center; gap: 12px; font-size: 14px;">
                        <i class="ph ph-globe" style="color: var(--text-muted);"></i>
                        <span>Are you an International Partner ?</span>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="intl-toggle" onchange="toggleInternational(this.checked)" ${state.isInternational ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>

                <div id="signup-fields" style="position: relative; z-index: 50;">
                    <!-- Name field (always visible) -->
                    <div class="input-group">
                        <label class="input-label">Full Name</label>
                        <div style="position: relative;">
                            <i class="ph ph-user" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted);"></i>
                            <input id="signup-name" type="text" class="input-field" placeholder="Enter your full name" style="padding-left: 48px;">
                        </div>
                    </div>
                    <div id="signup-fields-international" style="${state.isInternational ? 'display: block;' : 'display: none;'}">
                        <div class="input-group" style="position: relative; z-index: 10;">
                            <label class="input-label">Country</label>
                            <div class="custom-select" onclick="toggleCustomSelect(event)">
                                <div class="custom-select-trigger">
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <i class="ph ph-globe" style="color: var(--primary);"></i>
                                        <span id="selected-country">United Kingdom</span>
                                    </div>
                                    <i class="ph ph-caret-down"></i>
                                </div>
                                <div class="custom-options">
                                    <div class="custom-option" onclick="selectCountry('United States', event)">
                                        <span>United States</span>
                                        <div class="radio-circle"></div>
                                    </div>
                                    <div class="custom-option selected" onclick="selectCountry('United Kingdom', event)">
                                        <span>United Kingdom</span>
                                        <div class="radio-circle checked"><i class="ph ph-check"></i></div>
                                    </div>
                                    <div class="custom-option" onclick="selectCountry('Singapore', event)">
                                        <span>Singapore</span>
                                        <div class="radio-circle"></div>
                                    </div>
                                    <div class="custom-option" onclick="selectCountry('Australia', event)">
                                        <span>Australia</span>
                                        <div class="radio-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input-group">
                            <label class="input-label">Email Address</label>
                            <div style="position: relative;">
                                <i class="ph ph-envelope" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted);"></i>
                                <input id="signup-email" type="email" class="input-field" placeholder="Enter your email" style="padding-left: 48px;">
                            </div>
                        </div>
                    </div>
                    
                    <div id="signup-fields-national" style="${state.isInternational ? 'display: none;' : 'display: block;'}">
                        <div class="input-group">
                            <label class="input-label">Mobile Number</label>
                            <div style="display: flex; align-items: center; border: 1.5px solid var(--border-color); border-radius: 12px; overflow: hidden; background: white;">
                                <div style="padding: 16px 14px; border-right: 1.5px solid var(--border-color); font-size: 14px; font-weight: 600; color: var(--text-muted); white-space: nowrap; background: #F9FAFB;">+91</div>
                                <input id="signup-mobile" type="tel" placeholder="Enter mobile number" style="flex: 1; padding: 16px; border: none; outline: none; font-size: 14px; font-family: 'Outfit', sans-serif; background: transparent;">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="input-group">
                    <label class="input-label">Create Password</label>
                    <div style="position: relative;">
                        <i class="ph ph-lock" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted);"></i>
                        <input id="signup-password" type="password" class="input-field" placeholder="Minimum six characters" style="padding-left: 48px;">
                    </div>
                </div>

                <div class="input-group">
                    <label class="input-label">Confirm Password</label>
                    <div style="position: relative;">
                        <i class="ph ph-lock" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted);"></i>
                        <input id="signup-confirm" type="password" class="input-field" placeholder="Re-enter your password" style="padding-left: 48px;">
                    </div>
                </div>

                <div style="margin-top: auto;">
                    <button class="btn btn-primary" onclick="handleSignup()">Get OTP</button>
                    <div style="text-align: center; margin-top: 16px; font-size: 14px; color: var(--text-muted);">
                        Already have an account? <span onclick="navigateTo('login')" style="color: var(--primary); font-weight: 600; cursor: pointer;">Login</span>
                    </div>
                </div>
            </div>
        </div>
    `,


    role_selection: () => {
        const isBuyer = state.role === 'buyer';
        const isSeller = state.role === 'seller';
        return `
        <div class="onboarding-screen" style="background: white; height: 100vh; display: flex; flex-direction: column;">
            <div style="background: var(--primary); color: var(--accent); padding: 60px 20px 40px; display: flex; flex-direction: column; min-height: 60vh; overflow-y: auto;">
                <h1 style="font-size: 32px; margin-bottom: 8px; font-weight: 700;">Let's get started</h1>
                <p style="font-size: 14px; opacity: 0.9; margin-bottom: 40px; line-height: 1.5;">Choose your role. You can switch anytime from your profile</p>
                
                <div id="card-buyer" class="expandable-card ${isBuyer ? 'active' : ''}" onclick="selectRole('buyer')">
                    <div class="card-header">
                        <span style="font-weight: 600; font-size: 16px;">I am a Buyer</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="toggle-buyer" ${isBuyer ? 'checked' : ''} onclick="event.stopPropagation(); selectRole('buyer')">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="card-body">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; font-size: 13px;">
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Compare Listings</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Get verified suppliers</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Secure transactions</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Expand your business</div>
                        </div>
                        <button class="btn btn-primary" style="width: 100%;" onclick="event.stopPropagation(); navigateTo('choosing_setup')">Continue as Buyer</button>
                    </div>
                </div>

                <div id="card-seller" class="expandable-card ${isSeller ? 'active' : ''}" onclick="selectRole('seller')">
                    <div class="card-header">
                        <span style="font-weight: 600; font-size: 16px;">I am a Seller</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="toggle-seller" ${isSeller ? 'checked' : ''} onclick="event.stopPropagation(); selectRole('seller')">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="card-body">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; font-size: 13px;">
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Sell your products</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Get daily leads</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Get product listing</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><i class="ph ph-check" style="color: var(--primary);"></i> Expand your business</div>
                        </div>
                        <button class="btn btn-primary" style="width: 100%;" onclick="event.stopPropagation(); alert('Seller flow not implemented yet')">Continue as Seller</button>
                    </div>
                </div>
            </div>
            <div style="padding: 20px 20px 40px; display: flex; flex-direction: column; background: white; text-align: center; flex-shrink: 0; margin-top: auto;">
                <h3 style="font-size: 18px; margin-bottom: 14px; color: var(--text-main); font-weight: 700;">Have any question ?</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="btn" onclick="navigateTo('faq')" style="background: #DFE2F9; color: var(--text-main); font-weight: 600; border: none; border-radius: 8px; padding: 14px;">FAQ'S</button>
                    <button class="btn" onclick="navigateTo('knowledge_hub')" style="background: #DFE2F9; color: var(--text-main); font-weight: 600; border: none; border-radius: 8px; padding: 14px;">Knowledge Hub</button>
                </div>
            </div>
        </div>
        `;
    },
    choosing_setup: () => `
        <div class="onboarding-screen" style="position: relative;">
            <i class="ph ph-caret-left" onclick="goBack()" style="position: absolute; top: 85px; left: 19px; font-size: 24px; cursor: pointer; color: var(--text-main); z-index: 10;"></i>
            <div style="padding: 24px 20px 30px; margin-top: 130px; flex: 1; display: flex; flex-direction: column;">
                <h2 style="font-size: 32px; margin-bottom: 8px; line-height: 1.2; font-weight: 700;">What brings you to<br>Safar Bazaar ?</h2>
                <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">Choose one so we can tailor your setup</p>

                <div style="display: flex; flex-direction: column; gap: 0;"
                ><div class="option-card" onclick="setSetupType(this, 'new_venture')" style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px; min-height: 130px; justify-content: center;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <i class="ph ph-lightbulb" style="font-size: 22px; color: var(--accent);"></i>
                            <div class="option-title" style="margin:0;">Planning a New Venture</div>
                        </div>
                        <i class="ph ph-caret-right option-arrow"></i>
                    </div>
                    <div class="option-desc" style="margin-left: 32px;">We'll guide you through every setup</div>
                </div>

                <div class="option-card" onclick="setSetupType(this, 'existing')" style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px; min-height: 130px; justify-content: center;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <i class="ph ph-storefront" style="font-size: 22px; color: var(--accent);"></i>
                            <div class="option-title" style="margin:0;">Already have a Business</div>
                        </div>
                        <i class="ph ph-caret-right option-arrow"></i>
                    </div>
                    <div class="option-desc" style="margin-left: 32px;">Need help with your existing setup ?</div>
                </div>

                <div class="option-card" onclick="setSetupType(this, 'refurbished')" style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px; min-height: 130px; justify-content: center;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <i class="ph ph-wrench" style="font-size: 22px; color: var(--accent);"></i>
                            <div class="option-title" style="margin:0;">Refurbished Products</div>
                        </div>
                        <i class="ph ph-caret-right option-arrow"></i>
                    </div>
                    <div class="option-desc" style="margin-left: 32px;">We'll guide you through every setup</div>
                </div>
                </div>
            </div>
        </div>
    `,
    business_type: () => `
        <div class="onboarding-screen" style="position: relative;">
            <i class="ph ph-caret-left" onclick="goBack()" style="position: absolute; top: 85px; left: 19px; font-size: 24px; cursor: pointer; color: var(--text-main); z-index: 10;"></i>
            <div style="padding: 24px 20px 30px; margin-top: 130px; flex: 1; display: flex; flex-direction: column;">
                <h2 style="font-size: 32px; margin-bottom: 8px; line-height: 1.2; font-weight: 700;">Choose your Business Type</h2>
                <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">Select the main category for your business</p>
                <div class="option-card" style="min-height: 116px;" onclick="setBusinessType(this, 'sports')"><div class="option-icon"><i class="ph ph-soccer-ball"></i></div><div style="flex:1;"><div class="option-title">Sports Center</div><div class="option-desc">Facilities for indoor and outdoor sports</div></div><i class="ph ph-caret-right option-arrow"></i></div>
                <div class="option-card" style="min-height: 116px;" onclick="setBusinessType(this, 'amusement')"><div class="option-icon"><i class="ph ph-game-controller"></i></div><div style="flex:1;"><div class="option-title">Amusement Center</div><div class="option-desc">Arcades, rides and entertainment venues</div></div><i class="ph ph-caret-right option-arrow"></i></div>
                <div class="option-card" style="min-height: 116px;" onclick="setBusinessType(this, 'fitness')"><div class="option-icon"><i class="ph ph-barbell"></i></div><div style="flex:1;"><div class="option-title">Fitness Center</div><div class="option-desc">Gyms, studios and wellness center</div></div><i class="ph ph-caret-right option-arrow"></i></div>
                <div class="option-card" style="min-height: 116px;" onclick="setBusinessType(this, 'restaurant')"><div class="option-icon"><i class="ph ph-fork-knife"></i></div><div style="flex:1;"><div class="option-title">Restaurant</div><div class="option-desc">Food service, delivery and culinary business</div></div><i class="ph ph-caret-right option-arrow"></i></div>
            </div>
        </div>
    `,
    location: () => `
        <div class="onboarding-screen" style="position: relative;">
            <i class="ph ph-caret-left" onclick="goBack()" style="position: absolute; top: 85px; left: 19px; font-size: 24px; cursor: pointer; color: var(--text-main); z-index: 10;"></i>
            <div style="padding: 24px 20px 30px; margin-top: 130px; flex: 1; display: flex; flex-direction: column;">
                <h2 style="font-size: 32px; margin-bottom: 8px; line-height: 1.2; font-weight: 700;">Where is your Business Located ?</h2>
                <p style="color: var(--text-muted); font-size: 16px; margin-bottom: 30px;">Let us help you to get leads from your nearby area</p>
                <div class="input-group">
                    <label class="input-label">Pincode</label>
                    <input type="text" class="input-field" placeholder="Enter pincode">
                </div>
                <div class="input-group">
                    <label class="input-label">City</label>
                    <input type="text" class="input-field" placeholder="Enter City">
                </div>
                <div class="input-group">
                    <label class="input-label">State</label>
                    <input type="text" class="input-field" placeholder="Enter State">
                </div>
                <div style="margin-top: auto; padding-top: 20px;">
                    <button class="btn btn-primary" onclick="proceedFromLocation()">Continue</button>
                </div>
            </div>
        </div>
    `,
    how_to_start: () => `
        <div class="onboarding-screen" style="position: relative;">
            <i class="ph ph-caret-left" onclick="goBack()" style="position: absolute; top: 85px; left: 19px; font-size: 24px; cursor: pointer; color: var(--text-main); z-index: 10;"></i>
            <div style="padding: 24px 20px 30px; margin-top: 130px; flex: 1; display: flex; flex-direction: column;">
                <h2 style="font-size: 32px; margin-bottom: 8px; line-height: 1.2; font-weight: 700;">How do you want to get<br>started ?</h2>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 24px; font-weight: 500;">Choose the option that best fits your business goal</p>
                
                <div class="option-card" onclick="setHowToStart(this, 'franchise')" style="position: relative;">
                    <div style="position: absolute; top: 16px; right: 16px; background: var(--accent); color: white; padding: 4px 10px; border-radius: 20px; font-size: 10px; font-weight: 600;">Popular Choice</div>
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 16px;">
                            <i class="ph ph-storefront" style="font-size: 20px; color: var(--text-muted);"></i> Take a Franchise
                        </div>
                        <div style="font-size: 13px; color: var(--text-main); font-weight: 500;">Partner with an established brands</div>
                        <ul style="font-size: 12px; color: var(--text-muted); padding-left: 16px; margin: 0; display: flex; flex-direction: column; gap: 4px;">
                            <li>Proven business model</li>
                            <li>Brand recognition & support</li>
                            <li>Lower setup risk</li>
                        </ul>
                    </div>
                    <i class="ph ph-caret-right option-arrow" style="color: var(--text-muted); font-size: 20px;"></i>
                </div>

                <div class="option-card" onclick="setHowToStart(this, 'build_brand')" style="position: relative;">
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 16px;">
                            <i class="ph ph-buildings" style="font-size: 20px; color: var(--text-muted);"></i> Build your own Brand
                        </div>
                        <div style="font-size: 13px; color: var(--text-main); font-weight: 500;">Start from scratch with SAFAR's support</div>
                        <ul style="font-size: 12px; color: var(--text-muted); padding-left: 16px; margin: 0; display: flex; flex-direction: column; gap: 4px;">
                            <li>Full ownership & flexibility</li>
                            <li>Long term brand growth</li>
                            <li>End to end guidance</li>
                        </ul>
                    </div>
                    <i class="ph ph-caret-right option-arrow" style="color: var(--text-muted); font-size: 20px;"></i>
                </div>

                <div class="option-card" onclick="setHowToStart(this, 'existing_outlet')" style="position: relative;">
                    <div style="position: absolute; top: 16px; right: 16px; background: var(--accent); color: white; padding: 4px 10px; border-radius: 20px; font-size: 10px; font-weight: 600;">Quick Start</div>
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 16px;">
                            <i class="ph ph-storefront" style="font-size: 20px; color: var(--text-muted);"></i> Buy an Existing Outlet
                        </div>
                        <div style="font-size: 13px; color: var(--text-main); font-weight: 500;">Acquire a running business or equipment</div>
                        <ul style="font-size: 12px; color: var(--text-muted); padding-left: 16px; margin: 0; display: flex; flex-direction: column; gap: 4px;">
                            <li>Faster market entry</li>
                            <li>Ready Infrastructure</li>
                            <li>Reduced setup time</li>
                        </ul>
                    </div>
                    <i class="ph ph-caret-right option-arrow" style="color: var(--text-muted); font-size: 20px;"></i>
                </div>
            </div>
        </div>
    `,
    build_brand_help: () => {
        const isCore = state.brandHelpExpanded === 'core';
        const isGrowth = state.brandHelpExpanded === 'growth';
        return `
        <div class="onboarding-screen" style="position: relative;">
            <i class="ph ph-caret-left screen-back-btn" onclick="goBack()"></i>
            <div style="padding: 24px 20px 30px; margin-top: 130px; flex: 1; display: flex; flex-direction: column;">
                <h2 style="font-size: 32px; margin-bottom: 8px; line-height: 1.2; font-weight: 700;">What help do you need<br>to build your brand ?</h2>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 30px; font-weight: 500;">Choose the option that best fits your business goal</p>

                <div id="card-help-core" class="expandable-card ${isCore ? 'active' : ''}" onclick="toggleBrandHelp('core')">
                    <div class="card-header">
                        <div style="flex: 1;">
                            <div id="text-help-core" style="font-weight: 600; font-size: 16px; margin-bottom: 4px; ${isCore ? 'color: var(--primary);' : ''}">Core Setup (Recommended)</div>
                            <div style="font-size: 13px; color: var(--text-muted);">These are essential to open your business</div>
                        </div>
                        <i id="icon-help-core" class="ph ${isCore ? 'ph-caret-up' : 'ph-caret-down'}" style="color: var(--text-muted);"></i>
                    </div>
                    <div class="card-body">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; margin-bottom: 24px;">
                            <div class="tag-pill selected" onclick="togglePill(event, this)"><i class="ph ph-x-circle" style="font-size: 16px;"></i> Leasing & Licensing</div>
                            <div class="tag-pill" onclick="togglePill(event, this)">Operation & Staffing</div>
                            <div class="tag-pill" onclick="togglePill(event, this)">Equipment & Supplies</div>
                            <div class="tag-pill" onclick="togglePill(event, this)">Design & Construction</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                                <span>Permits</span><div class="circle-checkbox"></div>
                            </div>
                            <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                                <span>Contracts</span><div class="circle-checkbox"></div>
                            </div>
                            <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                                <span>Location approvals</span><div class="circle-checkbox"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="card-help-growth" class="expandable-card ${isGrowth ? 'active' : ''}" onclick="toggleBrandHelp('growth')">
                    <div class="card-header">
                        <div style="flex: 1;">
                            <div id="text-help-growth" style="font-weight: 600; font-size: 16px; margin-bottom: 4px; ${isGrowth ? 'color: var(--primary);' : ''}">Growth & Expansion (Optional)</div>
                            <div style="font-size: 13px; color: var(--text-muted);">Enhance your brand</div>
                        </div>
                        <i id="icon-help-growth" class="ph ${isGrowth ? 'ph-caret-up' : 'ph-caret-down'}" style="color: var(--text-muted);"></i>
                    </div>
                    <div class="card-body">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; margin-bottom: 24px;">
                            <div class="tag-pill selected" onclick="togglePill(event, this)"><i class="ph ph-x-circle" style="font-size: 16px;"></i> Branding & Marketing</div>
                            <div class="tag-pill" onclick="togglePill(event, this)">Technology & Software</div>
                            <div class="tag-pill" onclick="togglePill(event, this)">Secondary Revenue</div>
                            <div class="tag-pill" onclick="togglePill(event, this)">Design & Construction</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                                <span>Permits</span><div class="circle-checkbox"></div>
                            </div>
                            <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                                <span>Contracts</span><div class="circle-checkbox"></div>
                            </div>
                            <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                                <span>Location approvals</span><div class="circle-checkbox"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="flex: 1;"></div>
                <button class="btn btn-primary" onclick="showVendorListing(getDynamicVendorTitle())">Continue</button>
            </div>
        </div>
        `;
    },

    faq: () => `
        <div class="onboarding-screen" style="background: #F5F5F5; display: flex; flex-direction: column;">
            <div style="background: white; display: flex; align-items: center; padding: 50px 20px 20px; border-bottom: 1px solid #F0F0F0;">
                <i class="ph ph-caret-left" onclick="goBack()" style="font-size: 22px; cursor: pointer; color: var(--text-main);"></i>
                <div style="flex: 1; margin-left: 12px;">
                    <h1 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">FAQ &amp; Support</h1>
                    <p style="font-size: 13px; color: var(--text-muted);">Find answers to all your questions</p>
                </div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: 16px 20px 40px; display: flex; flex-direction: column;">
                ${[
            'How do I setup my account ?',
            'Do I need to complete onboarding ?',
            'Is there any registration fee ?',
            'How is my information used ?',
        ].map((q, i) => `
                <div onclick="var a=this.querySelector('.fa'); var c=this.querySelector('.fc'); a.style.display=a.style.display==='block'?'none':'block'; c.style.transform=a.style.display==='block'?'rotate(180deg)':'rotate(0deg)'"
                    style="background:white;border-radius:14px;padding:16px 18px;margin-bottom:12px;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.05);">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:14px;font-weight:600;color:var(--text-main);flex:1;padding-right:12px;">${q}</span>
                        <i class="ph ph-caret-down fc" style="font-size:18px;color:var(--text-muted);transition:transform .25s;flex-shrink:0;"></i>
                    </div>
                    <div class="fa" style="display:none;margin-top:12px;font-size:13px;color:var(--text-muted);line-height:1.6;">
                        We're still working on this answer. Please contact us at the number below for more information.
                    </div>
                </div>`).join('')}
                <div style="background:#E8F3EA;border-radius:14px;padding:20px;margin-top:auto;text-align:center;">
                    <p style="font-size:14px;font-weight:600;color:var(--text-main);margin-bottom:6px;">Didn't find the answer you are looking for ?</p>
                    <p style="font-size:13px;color:var(--text-muted);">Contact us at <strong style="color:var(--primary);">XXXX8912</strong></p>
                </div>
            </div>
        </div>
    `,

    knowledge_hub: () => `
        <div class="onboarding-screen" style="background: #F5F5F5; display: flex; flex-direction: column;">
            <div style="background: var(--primary); padding: 50px 20px 24px; color: var(--accent); position: relative; min-height: 355px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                <i class="ph ph-caret-left screen-back-btn screen-back-btn-white" onclick="goBack()" style="z-index: 10;"></i>
                <h1 style="font-size: 36px; font-weight: 800; text-align: center; margin-bottom: 30px; letter-spacing: -0.5px; color: var(--accent);">Knowledge Hub</h1>
                <div style="position: relative; margin-bottom: 20px;">
                    <i class="ph ph-magnifying-glass" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 20px;"></i>
                    <input type="text" placeholder="Search guides, articles" style="width: 100%; padding: 16px 16px 16px 48px; border-radius: 14px; border: none; font-size: 15px; outline: none; box-shadow: 0 4px 16px rgba(0,0,0,0.15); font-family: 'Inter', sans-serif;">
                </div>
                <p style="font-size: 15px; opacity: 0.9; margin-bottom: 10px; color: var(--accent); font-weight: 400;">Everything you need to start, scale or invest confidently</p>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: 20px; padding-bottom: 40px;">
                <h2 style="font-size:16px;font-weight:700;margin-bottom:14px;">Browse by Category</h2>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px;">
                    ${[
            { icon: 'ph-lightbulb', label: 'Start a New Business', sub: 'Setup tips & advice', bg: '#E8F3EA', ic: 'var(--primary)' },
            { icon: 'ph-trend-up', label: 'Improve Existing Business', sub: 'Boost your profits', bg: '#FFF7ED', ic: '#F97316' },
            { icon: 'ph-storefront', label: 'Buy Outlet / Equipment', sub: 'Find kiosks & gear', bg: '#EFF6FF', ic: '#3B82F6' },
            { icon: 'ph-book-open', label: 'Explore Guides', sub: 'Step by step articles', bg: '#FDF4FF', ic: '#A855F7' },
        ].map(c => `
                    <div style="background:white;border-radius:16px;padding:16px;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.06);">
                        <div style="width:40px;height:40px;border-radius:12px;background:${c.bg};display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
                            <i class="ph ${c.icon}" style="font-size:20px;color:${c.ic};"></i>
                        </div>
                        <div style="font-size:13px;font-weight:600;color:var(--text-main);line-height:1.3;margin-bottom:4px;">${c.label}</div>
                        <div style="font-size:11px;color:var(--text-muted);">${c.sub}</div>
                    </div>`).join('')}
                </div>
                <h2 style="font-size:16px;font-weight:700;margin-bottom:14px;">Most Read Guides</h2>
                <div style="display:flex;flex-direction:column;gap:16px;">
                    ${[
            { title: 'Step by step onboarding process', time: '5 min read', img: 'image1.png' },
            { title: 'How to find the perfect location for your business ?', time: '15 min read', img: 'image2.png' },
            { title: 'what licenses do I need to operate ?', time: '30 min read', img: 'image3.png' },
        ].map(g => `
                    <div style="background:white;border-radius:20px;overflow:hidden;display:flex;align-items:stretch;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.06); height: 140px;">
                        <div style="width: 40%; background: url('${g.img}') center/cover; flex-shrink: 0;"></div>
                        <div style="flex:1; padding: 20px; display: flex; flex-direction: column; justify-content: center;">
                            <div style="font-size:15px;font-weight:700;color:var(--text-main);line-height:1.4;margin-bottom:12px;">${g.title}</div>
                            <div style="font-size:13px;color:var(--text-muted);">${g.time}</div>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    `,

    vendor_listing: (title) => `
        <div class="onboarding-screen" style="background: #F3F4F6; position: relative; height: 100vh; overflow: hidden; display: flex; flex-direction: column;">
            <i class="ph ph-caret-left screen-back-btn screen-back-btn-white" onclick="goBack()" style="z-index: 20;"></i>
            <div style="background: var(--primary); padding: 82px 20px 26px; color: var(--accent); min-height: 345px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 500; opacity: 0.9;">
                        <i class="ph ph-map-pin" style="font-size: 14px;"></i> Noida, Uttar Pradesh
                    </div>
                    <div style="background: #DFE2F9; padding: 5px 12px; border-radius: 8px; font-size: 11px; font-weight: 600; cursor: pointer; color: #131927;" onclick="state.isChangingBusiness = true; navigateTo('business_type')">Change Business Type</div>
                </div>

                <h1 style="font-size: 32px; font-weight: 800; margin: 12px 0 36px; letter-spacing: -0.5px; text-align: center;">${state.lastVendorTitle || title}</h1>

                <div style="position: relative;">
                    <i class="ph ph-magnifying-glass" style="position: absolute; left: 16px; top: 49%; transform: translateY(-50%); color: var(--text-muted); font-size: 18px;"></i>
                    <!-- removed border none -->
                    <input class="input-field" type="text" placeholder="Search within ${state.lastVendorTitle || title}" style="width: 100%; padding: 16px 16px 16px 46px; border-radius: 14px; font-size: 14px; outline: none; box-shadow: 0 4px 16px rgba(0,0,0,0.15); font-family: 'Inter', sans-serif;">
                </div>
            </div>
            
            <div id="vendor-pills-container" style="padding: 16px 20px 4px; display: flex; gap: 10px; flex-shrink: 0;">
                ${(() => {
            const all = [];
            const isRefurb = title.includes('Refurbished');
            const isFranchiseOrOutlet = title.includes('Franchise') || title.includes('Outlet');
            const pillStyle = (id, label) => `<div id="pill-${id}" onclick="openFilterSheet('${label}')" class="tab-pill" style="flex: 1; padding: 10px 4px; border-radius: 12px !important; font-weight: 500;">${label}</div>`;
            all.push(pillStyle('location', 'Location'));
            all.push(pillStyle('price', 'Price'));
            all.push(pillStyle('rating', 'Rating'));
            if (!isRefurb && !isFranchiseOrOutlet) {
                all.push(`<div id="pill-refurbished" onclick="toggleRefurbishedItems()" class="tab-pill ${state.showRefurbishedItems ? 'selected' : ''}" style="flex: 1; padding: 10px 4px; border-radius: 12px !important; font-weight: 500;">Refurbished</div>`);
            }
            return all.join('');
        })()}
            </div>

            <div id="vendor-list-container" style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px; padding-bottom: 30px;">
                ${(() => {
            const generateVendors = (businessType, isFranchise, isRefurbished) => {
                const data = {
                    fitness: {
                        franchise: [
                            { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', name: 'Gold\'s Gym Franchise', feat: 'Premium gyms, Full support' },
                            { img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop', name: 'Cult.Fit Center', feat: 'Group classes, Branding' },
                            { img: 'Images/CardioMachines.jpg', name: 'Anytime Fitness', feat: '24/7 Access, Global reach' },
                            { img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=600&auto=format&fit=crop', name: 'Talwalkars Setup', feat: 'Traditional gyms' },
                            { img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop', name: 'Snap Fitness', feat: 'Compact models' }
                        ],
                        outlet: [
                            { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', name: 'Premium Fitness Solutions', feat: 'Commercial gyms' },
                            { img: 'Images/CardioMachines.jpg', name: 'FitTech Equipments', feat: 'Cardio machines' },
                            { img: 'Images/CardioMachines.jpg', name: 'ProGym Makers', feat: 'Premium Gyms' },
                            { img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=600&auto=format&fit=crop', name: 'Elite Gym Setups', feat: 'Functional training' },
                            { img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop', name: 'SportZone India', feat: 'Multi-sport setups' }
                        ]
                    },
                    restaurant: {
                        franchise: [
                            {
                                img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop', name: 'McDonald\'s Franchise', feat: 'Global brand, Complete training'
                            },
                            { img: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=600&auto=format&fit=crop', name: 'Subway Outlet Setup', feat: 'Quick setup, High ROI' },
                            {
                                img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop', name: 'Domino\'s Pizza Partner', feat: 'Delivery model'
                            },
                            { img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop', name: 'KFC Franchise', feat: 'Premium locations' },
                            { img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=600&auto=format&fit=crop', name: 'Starbucks Partner', feat: 'Premium cafe' }
                        ],
                        outlet: [
                            { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop', name: 'Gourmet Kitchen Setups', feat: 'Commercial Kitchens' },
                            { img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop', name: 'Bistro Furniture Outlet', feat: 'Dining tables, Decor' },
                            { img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop', name: 'Cafe Equipments Co.', feat: 'Espresso machines' },
                            { img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop', name: 'Bar Setup Solutions', feat: 'Bar counters, Chillers' },
                            { img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=600&auto=format&fit=crop', name: 'Fast Food Kiosks', feat: 'Compact cooking stations' }
                        ]
                    },
                    amusement: {
                        franchise: [
                            { img: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=600&auto=format&fit=crop', name: 'Timezone Partner', feat: 'Arcade games, Prizes' },
                            { img: 'Images/VRsetup.jpg', name: 'Smaaash Center', feat: 'VR & Bowling' },
                            { img: 'Images/FunPlay.jpg', name: 'Fun City Setup', feat: 'Kids play area' },
                            { img: 'Images/MysteryRoom.jpg', name: 'Mystery Rooms Franchise', feat: 'Escape rooms' },
                            { img: 'Images/Trampoline.jpg', name: 'Trampoline Park', feat: 'Active entertainment' }
                        ],
                        outlet: [
                            { img: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=600&auto=format&fit=crop', name: 'Arcade Machines Direct', feat: 'Coin-op games' },
                            { img: 'Images/VRsetup.jpg', name: 'VR Setups India', feat: 'VR Pods, Simulators' },
                            { img: 'Images/FunPlay.jpg', name: 'Soft Play Equipments', feat: 'Indoor playgrounds' },
                            { img: 'Images/Bowling.jpg', name: 'Bowling Alley Makers', feat: 'Lanes, Pinsetters' },
                            { img: 'Images/Trampoline.jpg', name: 'Amusement Rides Co.', feat: 'Carousel, Bumper cars' }
                        ]
                    },
                    sports: {
                        franchise: [
                            { img: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600&auto=format&fit=crop', name: 'Decathlon Partner', feat: 'Retail sports goods' },
                            { img: 'Images/TurfTown.png', name: 'Turf Town Franchise', feat: 'Futsal arenas' },
                            { img: 'Images/BadmintonHub.png', name: 'Badminton Hub', feat: 'Wooden courts' },
                            { img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop', name: 'Tennis Academy Setup', feat: 'Clay/Hard courts' },
                            { img: 'Images/SwimmingPool.jpg', name: 'Swimming Pool Partner', feat: 'Temperature controlled' }
                        ],
                        outlet: [
                            { img: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600&auto=format&fit=crop', name: 'Sports Flooring Pro', feat: 'Turf, Synthetic floors' },
                            { img: 'Images/TurfTown.png', name: 'Lighting Solutions', feat: 'Floodlights, LED' },
                            { img: 'Images/BadmintonHub.png', name: 'Court Accessories', feat: 'Nets, Posts, Fencing' },
                            { img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop', name: 'Locker Room Setups', feat: 'Benches, Lockers' },
                            { img: 'Images/SportsGear.png', name: 'Sports Gear Wholesale', feat: 'Balls, Rackets, Kits' }
                        ]
                    }
                };

                const prices = ['15 Lakhs', '30 Lakhs', '45 Lakhs', '80 Lakhs', '1.2 Cr', '2 Cr'];
                const ratings = ['4.1', '4.3', '4.5', '4.7', '4.8', '4.9'];
                const locations = ['Delhi NCR', 'Mumbai, MH', 'Bengaluru, KA', 'Noida, UP', 'Pan India'];
                const reviews = ['85', '120', '240', '560', '890', '1.2k'];

                const bType = businessType || 'fitness';
                const bData = data[bType] || data.fitness;

                const baseItems = isFranchise ? bData.franchise : bData.outlet;

                return baseItems.map((item, i) => {
                    let finalName = item.name;
                    let finalPrice = `Starting from ${prices[i % prices.length]}`;
                    let finalFeat = item.feat;

                    if (isRefurbished) {
                        finalName = `Refurbished ${item.name}`;
                        finalPrice = `₹${(i + 1) * 15},000`;
                        finalFeat = `Pre-owned, Good Condition`;
                    }

                    return {
                        img: item.img,
                        name: finalName,
                        loc: locations[i % locations.length],
                        rating: ratings[i % ratings.length],
                        reviews: reviews[i % reviews.length],
                        price: finalPrice,
                        feat: finalFeat
                    };
                });
            };

            const currentTitle = state.lastVendorTitle || title;
            const isRefurbishedView = currentTitle === 'Refurbished Products' || state.showRefurbishedItems;
            const isFranchise = currentTitle === 'Franchise Vendors' || state.howToStart === 'franchise';

            const listToUse = generateVendors(state.businessType, isFranchise, isRefurbishedView);

            return listToUse.map(v => `
                <div style="background: white; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
                    <div style="position: relative; height: 180px; border-radius: 16px 16px 0 0; overflow: hidden; background: url('${v.img}') center/cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);"></div>
                        <div style="position: absolute; bottom: 14px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: flex-end;">
                            <h3 style="color: white; font-size: 18px; font-weight: 700; margin: 0; line-height: 1.3;">${v.name}</h3>
                            <div style="background: rgba(255,255,255,0.18); backdrop-filter: blur(6px); padding: 4px 10px; border-radius: 20px; font-size: 11px; color: white; display: flex; align-items: center; gap: 4px; flex-shrink: 0; margin-left: 8px;">
                                <i class="ph ph-check-circle" style="color: #4ADE80; font-size: 13px;"></i> Verified
                            </div>
                        </div>
                    </div>
                    <div style="padding: 14px 16px 16px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <div style="display: flex; align-items: center; gap: 5px; font-size: 13px; color: var(--text-muted); font-weight: 500;">
                                <i class="ph ph-map-pin" style="font-size: 14px; color: var(--primary);"></i> ${v.loc}
                            </div>
                            <div style="display: flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 600; color: var(--text-main);">
                                <i class="ph-fill ph-star" style="font-size: 14px; color: #10B981;"></i> ${v.rating} <span style="font-weight: 400; color: var(--text-muted);">( ${v.reviews} reviews )</span>
                            </div>
                        </div>
                        <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px; padding-left: 2px; display: flex; flex-direction: column; gap: 5px;">
                            <div style="display: flex; align-items: center; gap: 8px;"><span style="width: 5px; height: 5px; border-radius: 50%; background: var(--text-muted); flex-shrink: 0; display: inline-block;"></span>${v.price}</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><span style="width: 5px; height: 5px; border-radius: 50%; background: var(--text-muted); flex-shrink: 0; display: inline-block;"></span>${v.feat}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <button onclick="navigateTo('vendor_detail')" style="width: 100%; padding: 13px; font-size: 14px; border-radius: 12px; border: none; background: var(--accent); color: white; font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: opacity 0.2s;" onmousedown="this.style.opacity='0.85'" onmouseup="this.style.opacity='1'" ontouchstart="this.style.opacity='0.85'" ontouchend="this.style.opacity='1'">View Profile</button>
                            <button onclick="navigateTo('enquiry')" style="width: 100%; padding: 13px; font-size: 14px; border-radius: 12px; border: 1.5px solid #DFE2F9; background: #DFE2F9; color: var(--primary); font-weight: 600; cursor: pointer; font-family: 'Outfit', sans-serif; transition: background 0.2s;" onmousedown="this.style.background='#CDD1EF'" onmouseup="this.style.background='#DFE2F9'" ontouchstart="this.style.background='#CDD1EF'" ontouchend="this.style.background='#DFE2F9'">Send Enquiry</button>
                        </div>
                    </div>
                </div>`).join('');
        })()}
            </div>

            <!-- Bottom Sheet Overlay & Container -->
            <div id="filter-sheet-overlay" onclick="closeFilterSheet()" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 100; display: none; opacity: 0;"></div>
            
            <div id="filter-bottom-sheet" style="position: absolute; bottom: -100%; left: 0; right: 0; background: white; border-radius: 24px 24px 0 0; z-index: 101; padding: 24px; box-shadow: 0 -4px 20px rgba(0,0,0,0.1);">
                <div style="width: 40px; height: 4px; background: #E5E7EA; border-radius: 2px; margin: 0 auto 24px;"></div>
                <div id="filter-sheet-body"></div>
            </div>
        </div>
    `,
    vendor_detail: () => `
        <div class="onboarding-screen" style="background: #F3F4F6; height: 100vh; overflow-y: auto; position: relative;" id="vendor-detail-scroll" onscroll="handleVendorScroll()">
            <i class="ph ph-caret-left screen-back-btn screen-back-btn-white" onclick="goBack()" style="text-shadow: 0 1px 4px rgba(0,0,0,0.4);"></i>
            <!-- Hero Image -->
            <div style="position: relative; height: 300px; background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop') center/cover; flex-shrink: 0;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.7) 100%);"></div>
                <div style="position: absolute; top: 85px; right: 20px; display: flex; gap: 20px; color: white; z-index: 10;">
                    <!-- <i class="ph ph-chat-circle-dots" style="font-size: 24px; cursor: pointer;" onclick="navigateTo('enquiry')"></i> -->
                    <i id="vendor-bookmark" class="ph ph-bookmark-simple" onclick="toggleBookmark(this)" style="font-size: 24px; cursor: pointer; transition: transform 0.3s ease;"></i>
                    <i class="ph ph-share-network" style="font-size: 24px;"></i>
                </div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; color: white;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                        <div>
                            <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 4px;">Fitness Bench Press</h1>
                            <div style="font-size: 12px; opacity: 0.9;">C 25, Ground Floor, Sector 15, Noida, UP</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); padding: 5px 10px; border-radius: 12px; font-size: 12px; display: flex; align-items: center; gap: 4px; margin-bottom: 4px;">
                            <i class="ph ph-check-circle" style="color: #4ADE80;"></i> Verified
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sticky Tabs -->
            <div id="vendor-tabs" style="position: sticky; top: 0; background: white; z-index: 50; border-bottom: 1px solid var(--border-color);">
                <div style="display: flex; gap: 10px; padding: 12px 16px;">
                    <div id="tab-about" onclick="scrollToSection('about-section')" class="nav-tab selected" style="flex: 1;">About</div>
                    <div id="tab-photos" onclick="scrollToSection('photos-section')" class="nav-tab" style="flex: 1;">Photos</div>
                    <div id="tab-reviews" onclick="scrollToSection('reviews-section')" class="nav-tab" style="flex: 1;">Reviews</div>
                </div>
            </div>

            <!-- About Section -->
            <div id="about-section" style="padding: 20px; background-color: white;">
                <!-- Location + Rating row -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 500; color: var(--text-main);">
                        <i class="ph ph-map-pin" style="font-size: 18px; color: var(--primary);"></i> Noida, Uttar Pradesh
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600;">
                        <i class="ph-fill ph-star" style="font-size: 16px; color: #10B981;"></i> 4.3 <span style="color: var(--text-muted); font-weight: 400;">( 120 reviews )</span>
                    </div>
                </div>

                <!-- Pricing card -->
                <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 16px; padding: 20px; margin-bottom: 40px; position: relative;">
                    <h4 style="font-weight: 700; margin-bottom: 4px; font-size: 16px;">Starting from ₹35L</h4>
                    <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 20px;">For complete commercial gym setup (2000 sq ft)<br>EMI Available &nbsp;·&nbsp; Financing options supported</p>
                    <h4 style="font-weight: 700; margin-bottom: 12px; font-size: 14px;">Facilities</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; color: var(--text-muted);">
                        <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 5px; height: 5px; background: var(--primary); border-radius: 50%;"></div> Cardio machines</div>
                        <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 5px; height: 5px; background: var(--primary); border-radius: 50%;"></div> Strength equipment</div>
                        <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 5px; height: 5px; background: var(--primary); border-radius: 50%;"></div> Layout Planning</div>
                        <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 5px; height: 5px; background: var(--primary); border-radius: 50%;"></div> Branding support</div>
                        <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 5px; height: 5px; background: var(--primary); border-radius: 50%;"></div> Training zones</div>
                    </div>
                    
                    <!-- Contact icons as floating pill over the border -->
                    <div id="vendor-contact-pill" style="position: absolute; bottom: 0; left: 50%; transform: translate(-50%, 50%); background: white; padding: 12px 36px; border-radius: 40px; display: flex; gap: 40px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); align-items: center; z-index: 10; white-space: nowrap; transition: box-shadow 0.2s;">
                        <i class="ph ph-phone" style="font-size: 26px; color: var(--text-main); cursor: pointer; transition: color 0.2s;" onclick="this.style.color='var(--primary)'"></i>
                        <i class="ph ph-envelope" style="font-size: 26px; color: var(--text-main); cursor: pointer; transition: color 0.2s;" onclick="this.style.color='var(--primary)'; setTimeout(() => navigateTo('enquiry'), 150);"></i>
                        <i class="ph ph-paper-plane-tilt" style="font-size: 26px; color: var(--text-main); cursor: pointer; transition: color 0.2s;" onclick="this.style.color='var(--primary)'"></i>
                    </div>
                </div>
            </div>

            <!-- Photos Section -->
            <div id="photos-section" style="padding: 0 0 20px;">
                <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 16px; padding: 0 20px;">View Photos</h3>
                <div style="display: flex; gap: 14px; overflow-x: auto; padding: 0 20px 8px;" class="hide-scrollbar">
                    <div style="width: 300px; height: 230px; border-radius: 18px; background: url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop') center/cover; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06);"></div>
                    <div style="width: 300px; height: 230px; border-radius: 18px; background: url('Images/CardioMachines.jpg') center/cover; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06);"></div>
                    <div style="width: 300px; height: 230px; border-radius: 18px; background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop') center/cover; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06);"></div>
                    <div style="width: 300px; height: 230px; border-radius: 18px; background: url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop') center/cover; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06);"></div>
                </div>
            </div>

            <!-- Reviews Section -->
            <div id="reviews-section" style="padding: 0 0 100px;">
                <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 16px; padding: 0 20px;">Reviews</h3>
                <div style="display: flex; gap: 14px; overflow-x: auto; padding: 0 20px 8px;" class="hide-scrollbar">
                    ${[
            { name: 'Anup Pandey', text: 'Best pricing compared to other vendors we checked. Good value for money and decent quality. Recommended for budget setups.' },
            { name: 'Radhika Kr.', text: 'Very professional supplier. Shared reguilar updates and handled last-minute changes without issues. Highly reliable for bulk orders.' },
            { name: 'Suresh M.', text: 'Amazing setup experience. The team was professional and timely. Overall a very pleasant experience.' },
            { name: 'Divya R.', text: 'Quick service & very trustworthy. Highly recommended for anyone starting their fitness business journey.' },
        ].map(r => `
                    <div style="width: 280px; min-height: 160px; background: white; padding: 24px; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); flex-shrink: 0; border: 1px solid #F3F4F6; display: flex; flex-direction: column; justify-content: flex-start;">
                        <h4 style="font-weight: 700; margin-bottom: 10px; font-size: 16px;">${r.name}</h4>
                        <p style="font-size: 15px; color: var(--text-muted); line-height: 1.5;">${r.text}</p>
                    </div>`).join('')}
                </div>
            </div>

        </div>
    `,

    enquiry: () => `
        <div class="onboarding-screen" style="background: white; display: flex; flex-direction: column; position: relative;">
            <i class="ph ph-caret-left screen-back-btn" onclick="goBack()"></i>
            <div style="padding: 80px 20px 20px; text-align: center;">
                <h1 style="font-size: 22px; font-weight: 700;">Enquiry</h1>
            </div>
            <div style="padding: 12px 20px; flex: 1; overflow-y: auto;">
                <div class="input-group" style="margin-bottom: 24px;">
                    <label class="input-label" style="font-size: 13px; font-weight: 600;">Tell us your requirements</label>
                    <textarea class="input-field" placeholder="Describe your requirement...&#10;&#10;(Ex: budget, location preference, type of business)" style="min-height: 140px; resize: none; padding: 16px; border-radius: 12px;"></textarea>
                </div>
                
                <div class="input-group" style="margin-bottom: 24px;">
                    <label class="input-label" style="font-size: 13px; font-weight: 600;">Your name</label>
                    <input type="text" class="input-field" placeholder="Madhav Sharma" style="padding: 16px; border-radius: 12px;">
                </div>
                
                <div class="input-group" style="margin-bottom: 24px;">
                    <label class="input-label" style="font-size: 13px; font-weight: 600;">Mobile Number</label>
                    <div style="position: relative;">
                        <input type="tel" class="input-field" placeholder="+91 Enter mobile number" style="padding: 16px 16px 16px 48px; border-radius: 12px;">
                        <div style="position: absolute; left: 16px; top: 18px; border-right: 1px solid var(--border-color); padding-right: 8px; color: var(--text-muted); font-size: 14px;">
                            <i class="ph ph-device-mobile"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="padding: 20px;">
                <button class="btn btn-primary" onclick="alert('Enquiry Sent!'); navigateTo('dashboard')">Send Enquiry</button>
            </div>
        </div>
    `,
    my_requirements_list: () => {
        const type = state.businessType || 'fitness';
        const isFranchise = state.howToStart === 'franchise';
        const titles = {
            fitness: isFranchise ? ['Gold\s Gym Franchise', 'Cult.Fit Partner', 'Anytime Fitness Setup', 'Snap Fitness Unit', 'Talwalkars Outlet'] : ['Fitness Equipment', 'Cardio Machines', 'Strength Training setup', 'Crossfit Equipments', 'Gym Layout Services'],
            restaurant: isFranchise ? ['McDonald\'s Franchise', 'Subway Setup', 'Domino\'s Partner', 'KFC Franchise', 'Starbucks Cafe'] : ['Commercial Kitchen', 'Bistro Furniture', 'Espresso Machines', 'Bar Counters', 'Fast Food Kiosk'],
            amusement: isFranchise ? ['Timezone Partner', 'Smaaash Center', 'Fun City Setup', 'Mystery Rooms', 'Trampoline Park'] : ['Arcade Machines', 'VR Pods', 'Indoor Playgrounds', 'Bowling Alleys', 'Bumper Cars'],
            sports: isFranchise ? ['Decathlon Partner', 'Turf Town Franchise', 'Badminton Hub', 'Tennis Academy', 'Swimming Pool Setup'] : ['Sports Flooring', 'Floodlights LED', 'Court Accessories', 'Locker Rooms', 'Sports Gear Wholesale']
        };

        const images = {
            fitness: isFranchise ? [
                'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
                'Images/CardioMachines.jpg',
                'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop'
            ] : [
                'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
                'Images/CardioMachines.jpg',
                'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop'
            ],
            restaurant: isFranchise ? [
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=600&auto=format&fit=crop'
            ] : [
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=600&auto=format&fit=crop'
            ],
            amusement: isFranchise ? [
                'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=600&auto=format&fit=crop',
                'Images/VRsetup.jpg',
                'Images/FunPlay.jpg',
                'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600&auto=format&fit=crop',
                'Images/Trampoline.jpg'
            ] : [
                'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=600&auto=format&fit=crop',
                'Images/VRsetup.jpg',
                'Images/FunPlay.jpg',
                'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600&auto=format&fit=crop',
                'Images/Trampoline.jpg'
            ],
            sports: isFranchise ? [
                'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600&auto=format&fit=crop',
                'Images/TurfTown.png',
                'Images/BadmintonHub.png',
                'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
                'Images/SportsGear.png'
            ] : [
                'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600&auto=format&fit=crop',
                'Images/TurfTown.png',
                'Images/BadmintonHub.png',
                'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
                'Images/SportsGear.png'
            ]
        };

        const tData = titles[type];
        const iData = images[type];

        return `
        <div class="onboarding-screen" style="background: #FFFFFF; height: 100vh; overflow-y: auto; position: relative;">
            <div style="background: white; padding: 50px 20px 20px; display: flex; align-items: center; justify-content: center; position: relative; border-bottom: 1px solid #F3F4F6; flex-shrink: 0; margin-bottom: 30px">
                <i class="ph ph-caret-left screen-back-btn" onclick="goBack()" style="top: 59px; left: 20px; color: var(--text-main);"></i>
                <h1 style="font-size: 26px; font-weight: 700;">My Requirements</h1>
            </div>
            <div style="padding: 20px; background: white;">
                ${tData.map((title, i) => `
                <div style="margin-bottom: 16px;">
                    <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-sm);">
                        <div style="height: 140px; background: url('${iData[i]}') center/cover;"></div>
                        <div style="padding: 16px;">
                            <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 4px;">${title}</h3>
                            <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">${Math.floor(Math.random() * 10 + 2)} vendors matched</div>
                            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 16px;">Posted recently</div>
                            <button class="btn btn-primary" style="padding: 12px; font-size: 14px; width: 100%; color: #FFFFFF !important;" onclick="navigateTo('vendor_detail')">View Details</button>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
        `;
    },
    dashboard: () => `
        <div class="onboarding-screen" style="background: #F3F4F6; height: 100vh; overflow-y: auto; padding-bottom: 100px; box-sizing: border-box;">
            <div style="background: var(--primary); color: var(--accent); height: 384px; min-height: 384px; flex-shrink: 0; position: relative; box-sizing: border-box;">
                <div style="position: absolute; top: 85px; left: 20px; right: 20px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500;">
                        <i class="ph ph-map-pin" style="font-size: 16px;"></i> Noida, Uttar Pradesh
                    </div>
                    <div style="display: flex; gap: 16px;">
                        <div style="position: relative; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;" onclick="navigateTo('notification')">
                            <i class="ph ph-bell" style="font-size: 22px;"></i>
                            <div style="position: absolute; top: 0px; right: 2px; width: 9px; height: 9px; background: white; border-radius: 70%; border: 1.5px solid var(--primary);"></div>
                        </div>
                        <i class="ph ph-user-circle" style="font-size: 22px; cursor: pointer;" onclick="navigateTo('profile')"></i>
                    </div>
                </div>
                
                <h1 style="position: absolute; top: 140px; left: 20px; font-size: 32px; font-weight: 700; margin: 0;">Hello ${(getLoggedInUser()?.name || 'there').split(' ')[0]}!</h1>
                
                <div style="position: absolute; top: 240px; left: 0; right: 0; display: flex; align-items: center; justify-content: center; gap: 12px;">
                    <span style="font-size: 14px; font-weight: 500; color: white;">Seller Mode</span>
                    <label style="position: relative; display: inline-block; width: 44px; height: 24px;" >
                        <input type="checkbox" style="opacity: 0; width: 0; height: 0;">
                        <span onclick="event.stopPropagation(); alert('Seller Mode is not implemented');" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.3); border-radius: 24px; transition: .4s;"></span>
                        <span style="position: absolute; content: ''; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; border-radius: 50%; transition: .4s;"></span>
                    </label>
                </div>
                
                <div style="position: absolute; bottom: 24px; left: 5px; right: 5px; display: flex; gap: 8px; justify-content: space-between;">
                    <div class="tab-pill selected" style="flex: 1; min-width: 122px; padding: 10px 4px; border-radius: 8px !important;" onclick="navigateTo('my_requirements_list')">My Requirements</div>
                    <div class="tab-pill" style="flex: 1; min-width: 122px; padding: 10px 4px; border-radius: 8px !important;" onclick="navigateTo('how_to_start')">Browse Vendors</div>
                    <div class="tab-pill" style="flex: 1; padding: 10px 4px; min-width: 122px; border-radius: 8px !important;" onclick="navigateTo('choosing_setup')">New Enquiry</div>
                </div>
            </div>
            
            <div style="padding: 24px 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h2 style="font-size: 16px; font-weight: 700;">My Requirements</h2>
                    <div style="font-size: 13px; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 4px; cursor: pointer;" onclick="navigateTo('my_requirements_list')">View All <i class="ph ph-caret-right"></i></div>
                </div>
                
                <div style="margin-bottom: 24px; overflow: hidden; position: relative;">
                    <div id="dashboard-card-track" style="display: flex; transition: transform 0.4s ease; width: 300%;" ontouchstart="dashCardTouchStart(event)" ontouchend="dashCardTouchEnd(event)">
                        ${[
            { img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop', name: 'Fitness Equipment', matched: '3 vendors matched', date: 'Posted on 26th February, 2026' },
            { img: './Images/CardioMachines.jpg', name: 'cardio machines', matched: '5 vendors matched', date: 'posted on 24th february, 2026' },
            { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', name: 'Strength Training Setup', matched: '12 vendors matched', date: 'Posted on 15th February, 2026' },
        ].map(c => `
                        <div style="width: 33.333%; padding: 0 2px; box-sizing: border-box; flex-shrink: 0;">
                            <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-sm);">
                                <div style="height: 140px; background: url('${c.img}') center/cover;"></div>
                                <div style="padding: 16px;">
                                    <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 4px;">${c.name}</h3>
                                    <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">${c.matched}</div>
                                    <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 16px;">${c.date}</div>
                                    <button class="btn btn-primary" style="padding: 12px; font-size: 14px; width: 100%; color: #FFFFFF !important;" onclick="navigateTo('vendor_detail')">View Details</button>
                                </div>
                            </div>
                        </div>`).join('')}
                    </div>
                    <div style="display: flex; justify-content: center; gap: 6px; margin-top: 16px;">
                        <div id="dash-dot-0" style="width: 6px; height: 6px; border-radius: 3px; background: var(--primary); transition: background 0.3s;"></div>
                        <div id="dash-dot-1" style="width: 6px; height: 6px; border-radius: 3px; background: #E5E7EA; transition: background 0.3s;"></div>
                        <div id="dash-dot-2" style="width: 6px; height: 6px; border-radius: 3px; background: #E5E7EA; transition: background 0.3s;"></div>
                    </div>
                </div>
                
                <h2 style="font-size: 16px; font-weight: 700; margin-bottom: 16px;">Help & Resource</h2>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div onclick="navigateTo('faq')" style="background: #DFE2F9; border-radius: 12px; padding: 16px; font-weight: 600; font-size: 14px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm); cursor: pointer;">FAQ'S <i class="ph ph-caret-right" style="color: var(--text-muted);"></i></div>
                    <div onclick="navigateTo('knowledge_hub')" style="background: #DFE2F9; border-radius: 12px; padding: 16px; font-weight: 600; font-size: 14px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm); cursor: pointer;">Knowledge Hub <i class="ph ph-caret-right" style="color: var(--text-muted);"></i></div>
                </div>
            </div>
        </div>
    `,
    chat_list: () => {
        const chatArr = Object.values(state.chats);
        return `
        <div class="onboarding-screen" style="background: white; height: 100vh; display: flex; flex-direction: column; position: relative;">
            <i class="ph ph-caret-left screen-back-btn" onclick="goBack()"></i>
            <!-- Header -->
            <div style="padding: 80px 20px 16px; background: white; text-align: center; border-bottom: 1px solid #F0F0F0;">
                <h1 style="font-size: 22px; font-weight: 700; color: var(--text-main);">My Chats</h1>
            </div>

            <!-- Filter Tabs -->
            <div style="padding: 12px 20px; display: flex; gap: 10px; justify-content: space-between; background: white; border-bottom: 1px solid #F3F4F6;">
                <div class="nav-tab selected" style="flex: 1;">All</div>
                <div class="nav-tab" style="flex: 1;">Unread 5</div>
                <div class="nav-tab" style="flex: 1;">Favourites</div>
            </div>

            <!-- Conversation List -->
            <div style="flex: 1; overflow-y: auto; padding-bottom: 100px;">
                ${chatArr.map(chat => {
            const last = chat.messages[chat.messages.length - 1];
            return `
                    <div onclick="openChat('${chat.id}')" style="padding: 14px 20px; display: flex; align-items: center; gap: 14px; cursor: pointer; border-bottom: 1px solid #F9FAFB;">
                        <div style="width: 46px; height: 46px; border-radius: 50%; background: #E5E7EA; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #6B7280;">
                            <i class="ph ph-user" style="font-size: 22px;"></i>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-size: 15px; font-weight: 600; color: var(--text-main); margin-bottom: 3px;">${chat.name}</div>
                            <div style="font-size: 13px; color: #9CA3AF; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                ${last.from === 'me' ? 'Message sent. ' : ''}${last.time}
                            </div>
                        </div>
                        <i class="ph ph-phone" style="font-size: 18px; color: #9CA3AF; flex-shrink: 0;"></i>
                    </div>`;
        }).join('')}
            </div>
            </div>
        </div>
    `;
    },

    chat_detail: () => {
        const chat = state.chats[state.activeChatId];
        if (!chat) { setTimeout(() => navigateTo('chat_list'), 0); return '<div class="onboarding-screen"></div>'; }
        return `
        <div class="onboarding-screen" style="background: #F5F5F5; height: 100vh; display: flex; flex-direction: column;">
            <!-- Chat Header -->
            <div style="background: white; padding: 50px 20px 14px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #F0F0F0; flex-shrink: 0;">
                <i class="ph ph-caret-left" onclick="navigateTo('chat_list')" style="font-size: 22px; cursor: pointer; color: var(--text-main); flex-shrink: 0;"></i>
                <div style="width: 38px; height: 38px; border-radius: 50%; background: #E5E7EA; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #6B7280;">
                    <i class="ph ph-user" style="font-size: 20px;"></i>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 15px; font-weight: 700; color: var(--text-main);">${chat.name}</div>
                </div>
                <i class="ph ph-phone" style="font-size: 20px; color: var(--text-muted); cursor: pointer;"></i>
            </div>

            <!-- You are talking to -->
            <div style="text-align: center; padding: 16px; font-size: 13px; color: #9CA3AF; background: #F5F5F5;">
                You are talking to ${chat.name.split(' ')[0]} Kumar
            </div>

            <!-- Messages -->
            <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 8px 16px 16px; display: flex; flex-direction: column; gap: 12px;">
                ${chat.messages.map(msg => {
            const isMe = msg.from === 'me';
            return `
                    <div style="display: flex; justify-content: ${isMe ? 'flex-end' : 'flex-start'};">
                        <div style="max-width: 72%; padding: 10px 14px; border-radius: ${isMe ? '18px 4px 18px 18px' : '4px 18px 18px 18px'}; background: ${isMe ? '#E8F3EA' : 'white'}; color: var(--text-main); font-size: 14px; line-height: 1.5; box-shadow: 0 1px 2px rgba(0,0,0,0.06);">
                            ${msg.text}
                        </div>
                    </div>`;
        }).join('')}
            </div>

            <!-- Input Bar -->
            <div style="background: white; padding: 12px 16px 28px; border-top: 1px solid #F0F0F0; display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
                <div style="flex: 1; border: 1.5px solid #E5E7EA; border-radius: 24px; padding: 12px 18px; display: flex; align-items: center;">
                    <input id="chat-input" type="text" placeholder="Type message" onkeydown="if(event.key==='Enter') sendChatMessage()" oninput="document.getElementById('chat-send-btn').className = this.value.trim() ? 'ph-fill ph-paper-plane-right' : 'ph ph-microphone'; document.getElementById('chat-send-btn').style.color = this.value.trim() ? 'var(--primary)' : '#9CA3AF';" style="flex: 1; border: none; background: transparent; outline: none; font-size: 14px; font-family: 'Inter', sans-serif; color: var(--text-main);">
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <i class="ph ph-smiley" style="font-size: 22px; color: #9CA3AF; cursor: pointer;"></i>
                    <i id="chat-send-btn" class="ph ph-microphone" onclick="sendChatMessage()" style="font-size: 22px; color: #9CA3AF; cursor: pointer; transition: color 0.2s;"></i>
                </div>
            </div>
        </div>
    `;
    },

    login: () => `
        <div class="onboarding-screen" style="background: white; display: flex; flex-direction: column; position: relative;">
            <i class="ph ph-caret-left screen-back-btn" onclick="goBack()"></i>
            <div style="padding: 72px 20px 34px; text-align: center;">
                <h1 style="font-size: 32px; font-weight: 700;">Login</h1>
            </div>
            <div style="padding: 12px 20px; flex: 1; display: flex; flex-direction: column;">
                <div id="login-error" style="display:none; background:#FEE2E2; color:#DC2626; padding:12px 16px; border-radius:12px; font-size:13px; margin-bottom:16px;"></div>
                <div class="toggle-row" style="margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 12px; font-size: 14px;">
                        <i class="ph ph-globe" style="color: var(--text-muted);"></i>
                        <span>International Partner?</span>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" id="login-intl-toggle" onchange="toggleLoginIntl(this.checked)">
                        <span class="slider"></span>
                    </label>
                </div>
                <div id="login-fields-national">
                    <div class="input-group" style="margin-bottom: 20px;">
                        <label class="input-label" style="font-size: 13px; font-weight: 600;">Mobile Number</label>
                        <div style="position: relative;">
                            <i class="ph ph-device-mobile" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted); font-size: 18px;"></i>
                            <input id="login-mobile" type="tel" class="input-field" placeholder="+91 Enter mobile number" style="padding: 16px 16px 16px 48px; border-radius: 12px;">
                        </div>
                    </div>
                </div>
                <div id="login-fields-international" style="display: none;">
                    <div class="input-group" style="margin-bottom: 20px;">
                        <label class="input-label" style="font-size: 13px; font-weight: 600;">Email Address</label>
                        <div style="position: relative;">
                            <i class="ph ph-envelope" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted); font-size: 18px;"></i>
                            <input id="login-email" type="email" class="input-field" placeholder="Enter your email" style="padding: 16px 16px 16px 48px; border-radius: 12px;">
                        </div>
                    </div>
                </div>
                <div class="input-group" style="margin-bottom: 12px;">
                    <label class="input-label" style="font-size: 13px; font-weight: 600;">Password</label>
                    <div style="position: relative;">
                        <i class="ph ph-lock" style="position: absolute; left: 16px; top: 18px; color: var(--text-muted); font-size: 18px;"></i>
                        <input id="login-password" type="password" class="input-field" placeholder="Enter your password" style="padding: 16px 16px 16px 48px; border-radius: 12px;">
                    </div>
                </div>
                <div style="text-align: right; margin-bottom: 36px;">
                    <span style="color: var(--accent); font-size: 13px; font-weight: 600; cursor: pointer;">Forgot Password ?</span>
                </div>
                <div style="margin-top: auto; padding-bottom: 30px;">
                    <button class="btn btn-primary" onclick="handleLogin()">Continue</button>
                    <div style="text-align: center; margin-top: 24px; font-size: 14px; color: var(--text-muted);">
                        Don't have an account? <span onclick="navigateTo('signup')" style="color: var(--primary); font-weight: 600; cursor: pointer;">Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    `,


    otp_verify: () => {
        const contact = state.otpContact || '+91-XXXXXXXXXX';
        return `
        <div class="onboarding-screen" style="background: white; display: flex; flex-direction: column; position: relative;">
            <i class="ph ph-caret-left screen-back-btn" onclick="goBack()"></i>
            <div style="padding: 85px 20px 20px; text-align: center;">
                <h1 style="font-size: 22px; font-weight: 700;">OTP Verification</h1>
            </div>
            <div style="padding: 12px 20px; flex: 1; display: flex; flex-direction: column;">
                <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-bottom: 36px; line-height: 1.6;">
                    We have sent a verification code to<br>
                    <strong style="color: var(--text-main);">${contact}</strong>
                </p>

                <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 36px;">
                    ${[0, 1, 2, 3].map(i => `<input id="otp-${i}" type="tel" maxlength="1" class="otp-box" oninput="otpInput(this, ${i})" onkeydown="otpBack(event, ${i})">`).join('')}
                </div>

                <div id="otp-error" style="display:none; background:#FEE2E2; color:#DC2626; padding:12px 16px; border-radius:12px; font-size:13px; margin-bottom:16px; text-align:center;"></div>

                <div style="text-align: center; font-size: 14px; margin-bottom: auto; color: var(--text-muted);">
                    Didn't get the OTP?
                    <span onclick="resendOtp()" style="color: var(--primary); font-weight: 600; cursor: pointer;"> Resend</span>
                </div>
                
                <!-- Dev hint -->
                <div id="otp-hint" style="margin-bottom: 24px; text-align: center; background: #F0FDF4; border-radius: 12px; padding: 12px; font-size: 13px; color: var(--primary); opacity: 0; animation: fadeUp 0.4s ease forwards 0.2s;">
                    Your OTP: <strong id="otp-display">${state.pendingOtp || '----'}</strong>
                </div>

                <div style="background: #F3F4F6; margin: 0 -20px -20px; padding: 30px 20px 40px; border-radius: 24px 24px 0 0;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; gap: 10px;">
                        ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<div class="keypad-btn" onclick="typeOtp(${n})">${n}</div>`).join('')}
                        <div class="keypad-btn" onclick="deleteOtp()"><i class="ph ph-backspace" style="font-size: 26px; color: var(--text-muted);"></i></div>
                        <div class="keypad-btn" onclick="typeOtp(0)">0</div>
                        <div class="keypad-btn" onclick="verifyOtp()"><i class="ph ph-check-circle" style="color: var(--primary); font-size: 32px;"></i></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    },


    profile: () => {
        const user = getLoggedInUser();
        if (!user) { setTimeout(() => navigateTo('login'), 0); return '<div class="onboarding-screen"></div>'; }
        return `
        <div class="onboarding-screen" style="background: white; height: 100vh; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; justify-content: center; padding: 50px 20px 20px; border-bottom: 1px solid #F3F4F6; position: relative;">
                <i class="ph ph-caret-left screen-back-btn" onclick="goBack()" style="position: absolute; top: 50px; left: 20px; font-size: 24px; color: var(--text-main);"></i>
                <h1 style="font-size: 20px; font-weight: 700;">Profile</h1>
            </div>
            
            <div style="flex: 1; padding: 24px 20px; overflow-y: auto;">
                <div style="border: 1.5px solid #F3F4F6; border-radius: 12px; margin-bottom: 16px;">
                    ${[
                { icon: 'ph-shopping-bag', label: 'Category' },
                { icon: 'ph-house', label: 'Budget Range' },
                { icon: 'ph-map-pin', label: 'Preferred Location' }
            ].map((item, i) => `
                    <div style="display: flex; align-items: center; justify-content: space-between; padding: 18px 16px; ${i < 2 ? 'border-bottom: 1.5px solid #F3F4F6;' : ''} cursor: pointer;">
                        <div style="display: flex; align-items: center; gap: 16px; font-weight: 500; font-size: 15px; color: var(--text-main);">
                            <i class="ph ${item.icon}" style="font-size: 20px; color: var(--text-muted);"></i>
                            ${item.label}
                        </div>
                        <i class="ph ph-caret-right" style="color: var(--text-muted); font-size: 16px;"></i>
                    </div>`).join('')}
                </div>

                <div style="border: 1.5px solid #F3F4F6; border-radius: 12px;">
                    ${[
                { icon: 'ph-pencil-simple', label: 'Report a problem' },
                { icon: 'ph-gear', label: 'Settings' }
            ].map((item, i) => `
                    <div style="display: flex; align-items: center; justify-content: space-between; padding: 18px 16px; ${i < 1 ? 'border-bottom: 1.5px solid #F3F4F6;' : ''} cursor: pointer;">
                        <div style="display: flex; align-items: center; gap: 16px; font-weight: 500; font-size: 15px; color: var(--text-main);">
                            <i class="ph ${item.icon}" style="font-size: 20px; color: var(--text-muted);"></i>
                            ${item.label}
                        </div>
                        <i class="ph ph-caret-right" style="color: var(--text-muted); font-size: 16px;"></i>
                    </div>`).join('')}
                    
                    <div onclick="handleLogout()" style="display: flex; align-items: center; justify-content: space-between; padding: 18px 16px; border-top: 1.5px solid #F3F4F6; cursor: pointer;">
                        <div style="display: flex; align-items: center; gap: 16px; font-weight: 600; font-size: 15px; color: #EF4444;">
                            <i class="ph ph-sign-out" style="font-size: 20px;"></i>
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    saved: () => {
        return `
        <div class="onboarding-screen" style="background: white; height: 100vh; display: flex; flex-direction: column;">
            <div style="background: white; padding: 50px 20px 20px; display: flex; align-items: center; justify-content: center; position: relative; border-bottom: 1px solid #F3F4F6; flex-shrink: 0; margin-top: 20px; margin-bottom: 30px;">
                <i class="ph ph-caret-left screen-back-btn" onclick="goBack()" style="top: 59px; left: 20px; color: var(--text-main);"></i>
                <h1 style="font-size: 26px; font-weight: 700;">Saved</h1>
            </div>
            <div style="flex: 1; padding: 24px 20px; overflow-y: auto; padding-bottom: 100px;">
                <div style="font-size: 15px; font-weight: 600; color: var(--text-main); margin-bottom: 20px;">You have total 4 saved items</div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${[
                { img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop', name: 'Fitness Equipment', matched: '3 vendors matched', date: 'Posted on 26th February, 2026' },
                { img: 'Images/CardioMachines.jpg', name: 'Fitness Equipment', matched: '3 vendors matched', date: 'Posted on 26th February, 2026' },
                { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', name: 'Premium Treadmill', matched: '2 vendors matched', date: 'Posted on 1st March, 2026' },
                { img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop', name: 'Crossfit Setup', matched: '5 vendors matched', date: 'Posted on 5th March, 2026' }
            ].map(v => `
                    <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid #F3F4F6;">
                        <div style="height: 140px; background: url('${v.img}') center/cover;"></div>
                        <div style="padding: 16px;">
                            <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 4px;">${v.name}</h3>
                            <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">${v.matched}</div>
                            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 16px;">${v.date}</div>
                            <button class="btn btn-primary" style="padding: 12px; font-size: 14px; width: 100%;" onclick="navigateTo('vendor_detail')">View Details</button>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
        </div>
        `;
    },
    notification: () => {
        return `
        <div class="onboarding-screen" style="background: white; height: 100vh; overflow-y: auto; display: flex; flex-direction: column;">
            <div style="background: white; padding: 50px 20px 20px; display: flex; align-items: center; justify-content: center; position: relative; border-bottom: 1px solid #F3F4F6; flex-shrink: 0;">
                <i class="ph ph-caret-left screen-back-btn" onclick="goBack()" style="top: 50px; left: 20px; color: var(--text-main);"></i>
                <h1 style="font-size: 20px; font-weight: 700;">Notification</h1>
            </div>
            <div style="padding: 24px 20px;">
                <div style="font-size: 15px; font-weight: 600; color: var(--text-main); margin-bottom: 20px;">You have total 3 notifications</div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    ${[
                { title: 'Sky Fitness Solution', desc: 'has requested for the approval of the delivery.' },
                { title: 'Order arriving on 24th May', desc: 'your order is dispatched and arriving on Monday 24th May,2026.' },
                { title: 'New update available', desc: 'New update is available.' }
            ].map(n => `
                    <div style="background: white; border-radius: 12px; padding: 16px; border: 1px solid transparent; box-shadow: 0px 10px 32px -4px rgba(19, 25, 39, 0.1), 0px 6px 14px -6px rgba(19, 25, 39, 0.12);">
                        <h3 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">${n.title}</h3>
                        <p style="font-size: 13px; color: var(--text-muted); line-height: 1.4;">${n.desc}</p>
                    </div>`).join('')}
                </div>
            </div>
        </div>
        `;
    }
};


// ─── Auth Helpers (localStorage) ─────────────────────────────────────────────
function getUsers() {
    try { return JSON.parse(localStorage.getItem('sb_users') || '[]'); } catch { return []; }
}
function saveUsers(users) {
    localStorage.setItem('sb_users', JSON.stringify(users));
}
function getLoggedInUser() {
    try { return JSON.parse(localStorage.getItem('sb_current_user') || 'null'); } catch { return null; }
}
function setLoggedInUser(user) {
    localStorage.setItem('sb_current_user', JSON.stringify(user));
}

function handleLogin() {
    const isIntl = document.getElementById('login-intl-toggle')?.checked;
    const mobile = (document.getElementById('login-mobile')?.value || '').trim();
    const email = (document.getElementById('login-email')?.value || '').trim();
    const password = document.getElementById('login-password')?.value || '';
    const errEl = document.getElementById('login-error');

    if (isIntl && !email) {
        errEl.textContent = 'Please enter your email.'; errEl.style.display = 'block'; return;
    }
    if (!isIntl && !mobile) {
        errEl.textContent = 'Please enter your mobile number.'; errEl.style.display = 'block'; return;
    }
    if (!password) {
        errEl.textContent = 'Please enter your password.'; errEl.style.display = 'block'; return;
    }
    const users = getUsers();
    let user;
    if (isIntl) {
        user = users.find(u => u.email === email && u.password === password);
    } else {
        user = users.find(u => u.mobile === mobile && u.password === password);
    }
    if (!user) {
        errEl.textContent = isIntl ? 'Invalid email or password.' : 'Invalid mobile number or password.'; errEl.style.display = 'block'; return;
    }
    setLoggedInUser(user);
    navigateTo('dashboard');
}

function toggleLoginIntl(isIntl) {
    document.getElementById('login-fields-national').style.display = isIntl ? 'none' : 'block';
    document.getElementById('login-fields-international').style.display = isIntl ? 'block' : 'none';
}

function toggleInternational(isIntl) {
    state.isInternational = isIntl;
    document.getElementById('signup-fields-national').style.display = isIntl ? 'none' : 'block';
    document.getElementById('signup-fields-international').style.display = isIntl ? 'block' : 'none';
}

function handleSignup() {
    const isIntl = document.getElementById('intl-toggle')?.checked;
    const name = (document.getElementById('signup-name')?.value || '').trim();
    const mobile = (document.getElementById('signup-mobile')?.value || '').trim();
    const country = document.getElementById('selected-country')?.innerText || '';
    const email = (document.getElementById('signup-email')?.value || '').trim();
    const password = document.getElementById('signup-password')?.value || '';
    const confirm = document.getElementById('signup-confirm')?.value || '';
    const errEl = document.getElementById('signup-error');

    if (!name) {
        errEl.textContent = 'Please enter your full name.'; errEl.style.display = 'block'; return;
    }
    if (!isIntl && !mobile) {
        errEl.textContent = 'Please enter your mobile number.'; errEl.style.display = 'block'; return;
    }
    if (!isIntl && mobile.replace(/\D/g, '').length < 10) {
        errEl.textContent = 'Enter a valid 10-digit mobile number.'; errEl.style.display = 'block'; return;
    }
    if (isIntl && !country) {
        errEl.textContent = 'Please select your country.'; errEl.style.display = 'block'; return;
    }
    if (isIntl && !email) {
        errEl.textContent = 'Please enter your email address.'; errEl.style.display = 'block'; return;
    }
    if (password.length < 6) {
        errEl.textContent = 'Password must be at least 6 characters.'; errEl.style.display = 'block'; return;
    }
    if (password !== confirm) {
        errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; return;
    }

    const users = getUsers();
    if (isIntl && users.find(u => u.email === email)) {
        errEl.textContent = 'An account with this email already exists.'; errEl.style.display = 'block'; return;
    }
    if (!isIntl && users.find(u => u.mobile === mobile)) {
        errEl.textContent = 'An account with this mobile already exists.'; errEl.style.display = 'block'; return;
    }

    // Store pending signup data and generate OTP
    const otp = String(Math.floor(1000 + Math.random() * 9000));
    state.pendingOtp = otp;
    state.otpContact = isIntl ? email : ('+91-' + mobile.replace(/\D/g, '').slice(-10).replace(/(\d{6})(\d{4})/, 'XXXXXX$2'));
    state.pendingUser = { id: Date.now(), name, mobile: isIntl ? '' : mobile, email: isIntl ? email : '', password, country: isIntl ? country : 'India', city: '', state: '', isIntl, createdAt: new Date().toISOString() };

    console.log('OTP for dev:', otp); // visible in dev tools
    navigateTo('otp_verify');
}

function otpInput(el, idx) {
    el.value = el.value.replace(/\D/g, '').slice(-1);
    if (el.value && idx < 3) document.getElementById('otp-' + (idx + 1))?.focus();
}
function otpBack(e, idx) {
    if (e.key === 'Backspace' && !e.target.value && idx > 0) document.getElementById('otp-' + (idx - 1))?.focus();
}

function verifyOtp() {
    const entered = [0, 1, 2, 3].map(i => document.getElementById('otp-' + i)?.value || '').join('');
    const errEl = document.getElementById('otp-error');
    if (entered.length < 4) {
        errEl.textContent = 'Please enter the 4-digit OTP.'; errEl.style.display = 'block'; return;
    }
    if (entered !== state.pendingOtp) {
        errEl.textContent = 'Incorrect OTP. Please try again.'; errEl.style.display = 'block'; return;
    }
    // OTP verified — save user
    const users = getUsers();
    users.push(state.pendingUser);
    saveUsers(users);
    setLoggedInUser(state.pendingUser);
    state.pendingOtp = null; state.pendingUser = null; state.otpContact = null;
    navigateTo('role_selection');
}

function resendOtp() {
    const otp = String(Math.floor(1000 + Math.random() * 9000));
    state.pendingOtp = otp;
    console.log('Resent OTP:', otp);
    const hint = document.getElementById('otp-display');
    if (hint) hint.textContent = otp;
    const errEl = document.getElementById('otp-error');
    if (errEl) { errEl.textContent = 'OTP resent!'; errEl.style.background = '#D0E7D5'; errEl.style.color = '#0F5F28'; errEl.style.display = 'block'; }
}

function deleteOtp() {
    for (let i = 3; i >= 0; i--) {
        const input = document.getElementById('otp-' + i);
        if (input && input.value) {
            input.value = '';
            input.focus();
            break;
        }
    }
}

function typeOtp(num) {
    for (let i = 0; i < 4; i++) {
        const input = document.getElementById('otp-' + i);
        if (input && !input.value) {
            input.value = num;
            if (i < 3) document.getElementById('otp-' + (i + 1))?.focus();
            break;
        }
    }
}

function handleLogout() {
    localStorage.removeItem('sb_current_user');
    navigateTo('welcome');
}
// ─────────────────────────────────────────────────────────────────────────────


let touchStartX = 0;

let touchEndX = 0;

function scrollToSection(sectionId) {
    const container = document.getElementById('vendor-detail-scroll');
    const section = document.getElementById(sectionId);

    // Manually set active tab immediately
    const tabName = sectionId.replace('-section', '');
    ['about', 'photos', 'reviews'].forEach(name => {
        const el = document.getElementById('tab-' + name);
        if (el) {
            if (name === tabName) el.classList.add('selected');
            else el.classList.remove('selected');
        }
    });

    // Lock scroll-based tab updates during smooth scroll
    state._scrollLocked = true;
    clearTimeout(state._scrollLockTimer);
    state._scrollLockTimer = setTimeout(() => { state._scrollLocked = false; }, 800);

    if (container && section) {
        const tabs = document.getElementById('vendor-tabs');
        const tabsHeight = tabs ? tabs.offsetHeight : 0;
        const containerTop = container.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;
        container.scrollBy({ top: sectionTop - containerTop - tabsHeight, behavior: 'smooth' });
    }
}

function handleVendorScroll() {
    // Skip if scroll is locked (tab was just clicked)
    if (state._scrollLocked) return;

    const container = document.getElementById('vendor-detail-scroll');
    if (!container) return;

    // Auto-adjusting sticky contact pill logic
    const pill = document.getElementById('vendor-contact-pill');
    if (pill) {
        if (!pill.dataset.initialBottom) {
            const rect = pill.getBoundingClientRect();
            // Calculate what rect.bottom would be if scrollTop was 0
            const initialRectBottom = rect.bottom + container.scrollTop;
            pill.dataset.initialBottom = (window.innerHeight - initialRectBottom) + "px";
        }

        if (container.scrollTop > 5) {
            if (pill.style.position !== 'fixed') {
                pill.style.position = 'fixed';
                pill.style.bottom = pill.dataset.initialBottom;
                pill.style.transform = 'translateX(-50%)';
                pill.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                pill.style.zIndex = '100';
            }
        } else {
            if (pill.style.position === 'fixed') {
                pill.style.position = 'absolute';
                pill.style.bottom = '0';
                pill.style.transform = 'translate(-50%, 50%)';
                pill.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
                pill.style.zIndex = '10';
            }
        }
    }


    const about = document.getElementById('about-section');
    const photos = document.getElementById('photos-section');
    const reviews = document.getElementById('reviews-section');
    const tabs = document.getElementById('vendor-tabs');
    if (!about || !photos || !reviews || !tabs) return;

    const tabsBottom = tabs.getBoundingClientRect().bottom;
    const photosTop = photos.getBoundingClientRect().top;
    const reviewsTop = reviews.getBoundingClientRect().top;

    const setActive = (active) => {
        ['about', 'photos', 'reviews'].forEach(name => {
            const el = document.getElementById('tab-' + name);
            if (!el) return;
            if (name === active) {
                el.classList.add('selected');
            } else {
                el.classList.remove('selected');
            }
        });
    };

    if (reviewsTop <= tabsBottom + 10) {
        setActive('reviews');
    } else if (photosTop <= tabsBottom + 10) {
        setActive('photos');
    } else {
        setActive('about');
    }
}

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    if (state.welcomeInterval) {
        clearInterval(state.welcomeInterval);
    }
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        state.welcomeSlide = (state.welcomeSlide + 1) % 3;
        updateCarousel();
    } else if (touchEndX - touchStartX > 50) {
        state.welcomeSlide = (state.welcomeSlide - 1 + 3) % 3;
        updateCarousel();
    }
    startWelcomeCarousel();
}

// ─── Dashboard Card Carousel ─────────────────────────────────────────────────
let dashCardSlide = 0;
let dashTouchStartX = 0;
let dashInterval = null;

function startDashCarousel() {
    if (dashInterval) clearInterval(dashInterval);
    dashInterval = setInterval(() => {
        dashCardSlide = (dashCardSlide + 1) % 3;
        updateDashCards();
    }, 3000);
}

function stopDashCarousel() {
    if (dashInterval) clearInterval(dashInterval);
}

function dashCardTouchStart(e) {
    dashTouchStartX = e.changedTouches[0].screenX;
    stopDashCarousel();
}
function dashCardTouchEnd(e) {
    const diff = dashTouchStartX - e.changedTouches[0].screenX;
    if (diff > 50) { dashCardSlide = Math.min(dashCardSlide + 1, 2); }
    else if (diff < -50) { dashCardSlide = Math.max(dashCardSlide - 1, 0); }
    updateDashCards();
    startDashCarousel();
}
function updateDashCards() {
    const track = document.getElementById('dashboard-card-track');
    if (track) track.style.transform = `translateX(-${dashCardSlide * 33.333}%)`;
    for (let i = 0; i < 3; i++) {
        const dot = document.getElementById('dash-dot-' + i);
        if (dot) dot.style.background = i === dashCardSlide ? 'var(--primary)' : '#E5E7EA';
    }
}

// ─── Bookmark Toggle ─────────────────────────────────────────────────────────
function toggleBookmark(el) {
    const isFilled = el.classList.contains('ph-fill');
    if (isFilled) {
        el.classList.remove('ph-fill');
        el.classList.add('ph');
    } else {
        el.classList.remove('ph');
        el.classList.add('ph-fill');
        gsap.fromTo(el, { scale: 1.5 }, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
    }
}

function startWelcomeCarousel() {
    if (state.welcomeInterval) clearInterval(state.welcomeInterval);
    state.welcomeInterval = setInterval(() => {
        state.welcomeSlide = (state.welcomeSlide + 1) % 3;
        updateCarousel();
    }, 3000);
}

function updateCarousel() {
    const track = document.getElementById('welcome-track');
    if (track) {
        track.style.transform = `translateX(-${state.welcomeSlide * 33.333}%)`;
        for (let i = 0; i < 3; i++) {
            const dot = document.getElementById('dot-' + i);
            if (dot) {
                if (i === state.welcomeSlide) {
                    dot.classList.add('active');
                    dot.style.background = 'var(--primary)';
                } else {
                    dot.classList.remove('active');
                    dot.style.background = '#E5E7EA';
                }
            }
        }
    }
}

function getGlobalNavbarHTML(view) {
    if (!getLoggedInUser()) return '';
    const noNavViews = ['splash', 'welcome', 'login', 'signup', 'choosing_setup', 'business_type', 'location', 'how_to_start', 'build_brand_help', 'chat_detail', 'enquiry', 'otp_verify', 'role_selection', 'faq', 'knowledge_hub'];
    if (noNavViews.includes(view)) return '';

    let activeTab = 'home';
    if (view === 'chat_list') activeTab = 'chat';
    else if (view === 'saved') activeTab = 'saved';
    else if (view === 'vendor_listing' && state.lastVendorTitle === 'Refurbished Products') activeTab = 'refurbished';
    else if (view !== 'dashboard') activeTab = '';

    return `
    <div id="main-navbar" style="position: fixed; bottom: 16px; left: 12px; right: 12px; margin: 0 auto; max-width: 448px; background: white; display: flex; justify-content: space-around; align-items: center; padding: 12px 16px; box-shadow: 0 6px 24px rgba(0,0,0,0.15); z-index: 100; border-radius: 20px; transition: transform 0.3s ease;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 5px; cursor: pointer;" onclick="navigateTo('dashboard')">
            ${activeTab === 'home' ? `
            <div style="background: #E8F3EA; width: 52px; height: 40px; border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                <i class="ph-fill ph-house" style="font-size: 22px; color: #16D495;"></i>
            </div>
            <span style="font-size: 11px; font-weight: 600; color: #16D495;">Home</span>` : `
            <i class="ph ph-house" style="font-size: 24px; color: #9CA3AF;"></i>
            <span style="font-size: 11px; font-weight: 500; color: #9CA3AF;">Home</span>`}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 5px; cursor: pointer;" onclick="showVendorListing('Refurbished Products')">
            ${activeTab === 'refurbished' ? `
            <div style="background: #E8F3EA; width: 52px; height: 40px; border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                <i class="ph-fill ph-package" style="font-size: 22px; color: #16D495;"></i>
            </div>
            <span style="font-size: 11px; font-weight: 600; color: #16D495;">Refurbished</span>` : `
            <i class="ph ph-package" style="font-size: 24px; color: #9CA3AF;"></i>
            <span style="font-size: 11px; font-weight: 500; color: #9CA3AF;">Refurbished</span>`}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 5px; cursor: pointer;" onclick="navigateTo('chat_list')">
            ${activeTab === 'chat' ? `
            <div style="background: #E8F3EA; width: 52px; height: 40px; border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                <i class="ph-fill ph-chat-circle" style="font-size: 22px; color: #16D495;"></i>
            </div>
            <span style="font-size: 11px; font-weight: 600; color: #16D495;">Chat</span>` : `
            <i class="ph ph-chat-circle" style="font-size: 24px; color: #9CA3AF;"></i>
            <span style="font-size: 11px; font-weight: 500; color: #9CA3AF;">Chat</span>`}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 5px; cursor: pointer;" onclick="navigateTo('saved')">
            ${activeTab === 'saved' ? `
            <div style="background: #E8F3EA; width: 52px; height: 40px; border-radius: 20px; display: flex; align-items: center; justify-content: center;">
                <i class="ph-fill ph-bookmark-simple" style="font-size: 22px; color: #16D495;"></i>
            </div>
            <span style="font-size: 11px; font-weight: 600; color: #16D495;">Saved</span>` : `
            <i class="ph ph-bookmark-simple" style="font-size: 24px; color: #9CA3AF;"></i>
            <span style="font-size: 11px; font-weight: 500; color: #9CA3AF;">Saved</span>`}
        </div>
    </div>`;
}

function navigateTo(view, isBack = false, skipHistory = false) {
    if (state.welcomeInterval) {
        clearInterval(state.welcomeInterval);
        state.welcomeInterval = null;
    }

    if (!isBack && state.currentView !== view) {
        if (state.currentView !== 'splash') {
            state.history.push({
                view: state.currentView,
                title: state.lastVendorTitle
            });
            if (!skipHistory) {
                window.history.pushState({ view: view, title: state.lastVendorTitle }, '', '#' + view);
            }
        } else {
            if (!skipHistory) {
                window.history.replaceState({ view: view, title: state.lastVendorTitle }, '', '#' + view);
            }
        }
    }

    const isSplash = state.currentView === 'splash';
    const mainContent = document.getElementById('main-content');

    if (isSplash) {
        const logo = document.getElementById('splash-logo');
        if (logo) {
            gsap.to(logo, { scale: 8, opacity: 0, duration: 0.6, ease: 'power3.in' });
        }
        gsap.to(mainContent, {
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
            onComplete: () => {
                state.currentView = view;
                mainContent.innerHTML = views[view]();

                if (view === 'dashboard' && window.startDashCarousel) {
                    setTimeout(startDashCarousel, 100);
                } else if (window.stopDashCarousel) {
                    stopDashCarousel();
                }

                // Inject Global Navbar if applicable
                const navbarHTML = getGlobalNavbarHTML(view);
                if (navbarHTML) mainContent.insertAdjacentHTML('beforeend', navbarHTML);

                // Smooth dissolve in
                gsap.fromTo(mainContent, { opacity: 0, x: 0 }, { opacity: 1, duration: 0.4 });
            }
        });
        return;
    }

    // Animation directions for normal navigation
    const outX = isBack ? 20 : -20;
    const inX = isBack ? -20 : 20;

    gsap.to(mainContent, {
        opacity: 0,
        x: outX,
        duration: 0.2,
        onComplete: () => {
            state.currentView = view;
            if (view === 'vendor_listing') {
                mainContent.innerHTML = views[view](state.lastVendorTitle || 'Vendors');
            } else {
                mainContent.innerHTML = views[view]();
            }

            if (view === 'dashboard' && window.startDashCarousel) {
                setTimeout(startDashCarousel, 100);
            } else if (window.stopDashCarousel) {
                stopDashCarousel();
            }

            // Inject Global Navbar if applicable
            const navbarHTML = getGlobalNavbarHTML(view);
            if (navbarHTML) {
                mainContent.insertAdjacentHTML('beforeend', navbarHTML);
            }

            gsap.fromTo(mainContent, { opacity: 0, x: inX }, { opacity: 1, x: 0, duration: 0.2 });
            if (view === 'welcome') {
                startWelcomeCarousel();
            }
            // Attach scroll-hide navbar after render
            setTimeout(() => attachNavbarScrollHide(), 50);
        }
    });
}

function attachNavbarScrollHide() {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;
    // Find the scrollable parent
    const scrollEl = document.querySelector('#main-content [style*="overflow-y: auto"]') ||
        document.querySelector('#main-content [style*="overflow-y: scroll"]') ||
        document.querySelector('#vendor-detail-scroll') ||
        document.querySelector('.onboarding-screen');
    if (!scrollEl) return;
    let lastY = 0;
    scrollEl.addEventListener('scroll', () => {
        const currentY = scrollEl.scrollTop;
        if (currentY > lastY && currentY > 10) {
            // Scrolling down — hide
            navbar.style.transform = 'translateY(110%)';
        } else {
            // Scrolling up — show
            navbar.style.transform = 'translateY(0)';
        }
        lastY = currentY;
    }, { passive: true });
}

function goBack() {
    if (state.history.length > 0) {
        window.history.back();
    }
}

function toggleInternational(isChecked) {
    state.isInternational = isChecked;
    const nat = document.getElementById('signup-fields-national');
    const intl = document.getElementById('signup-fields-international');

    if (nat && intl) {
        if (isChecked) {
            nat.style.display = 'none';
            intl.style.display = 'block';
            gsap.from(intl, { opacity: 0, y: 10, duration: 0.3 });
        } else {
            intl.style.display = 'none';
            nat.style.display = 'block';
            gsap.from(nat, { opacity: 0, y: 10, duration: 0.3 });
        }
    } else {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = views['signup']();
    }
}

function selectRole(role) {
    state.role = role;
    const buyerCard = document.getElementById('card-buyer');
    const sellerCard = document.getElementById('card-seller');
    const toggleBuyer = document.getElementById('toggle-buyer');
    const toggleSeller = document.getElementById('toggle-seller');

    if (buyerCard && sellerCard) {
        if (role === 'buyer') {
            buyerCard.classList.add('active');
            if (toggleBuyer) toggleBuyer.checked = true;

            sellerCard.classList.remove('active');
            if (toggleSeller) toggleSeller.checked = false;
        } else {
            sellerCard.classList.add('active');
            if (toggleSeller) toggleSeller.checked = true;

            buyerCard.classList.remove('active');
            if (toggleBuyer) toggleBuyer.checked = false;
        }
    } else {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = views['role_selection']();
    }
}

function setSetupType(el, type) {
    state.setupType = type;
    el.classList.add('selected');
    setTimeout(() => {
        if (type === 'refurbished') {
            showVendorListing('Refurbished Products');
        } else {
            navigateTo('business_type');
        }
    }, 400);
}

function getDynamicVendorTitle(prefix = '') {
    const mapping = {
        'sports': 'Sports',
        'amusement': 'Amusement',
        'fitness': 'Fitness',
        'restaurant': 'Restaurant'
    };
    const business = mapping[state.businessType] || 'Business';
    if (prefix === 'Franchise') {
        return `${business} Franchise`;
    }
    if (prefix === 'Outlet') {
        return `${business} Outlet`;
    }
    if (prefix === 'Existing Setup') {
        return `${business} Setup`;
    }
    if (prefix) {
        return `${prefix} ${business} Vendors`.trim();
    }
    return `${business} Vendors`.trim();
}

function setBusinessType(el, type) {
    state.businessType = type;
    el.classList.add('selected');
    setTimeout(() => {
        if (state.isChangingBusiness) {
            state.isChangingBusiness = false;
            // Go directly back to vendor listing with updated dynamic title
            let title = getDynamicVendorTitle();
            if (state.lastVendorTitle === 'Refurbished Products') {
                title = 'Refurbished Products';
            } else if (state.howToStart === 'franchise') {
                title = getDynamicVendorTitle('Franchise');
            } else if (state.howToStart === 'existing_outlet' || state.howToStart === 'outlet') {
                title = getDynamicVendorTitle('Outlet');
            } else if (state.setupType === 'existing') {
                title = getDynamicVendorTitle('Existing Setup');
            }
            showVendorListing(title);
        } else {
            navigateTo('location');
        }
    }, 400);
}

function proceedFromLocation() {
    if (state.setupType === 'new_venture') {
        navigateTo('how_to_start');
    } else if (state.setupType === 'existing') {
        navigateTo('build_brand_help');
    } else {
        showVendorListing(getDynamicVendorTitle('Existing Setup'));
    }
}

function setHowToStart(el, type) {
    state.howToStart = type;
    el.classList.add('selected');
    setTimeout(() => {
        if (type === 'build_brand') {
            navigateTo('build_brand_help');
        } else if (type === 'franchise') {
            showVendorListing(getDynamicVendorTitle('Franchise'));
        } else {
            showVendorListing(getDynamicVendorTitle('Outlet'));
        }
    }, 400);
}

function toggleBrandHelp(section) {
    state.brandHelpExpanded = state.brandHelpExpanded === section ? null : section;
    const cardCore = document.getElementById('card-help-core');
    const cardGrowth = document.getElementById('card-help-growth');
    const iconCore = document.getElementById('icon-help-core');
    const iconGrowth = document.getElementById('icon-help-growth');
    const textCore = document.getElementById('text-help-core');
    const textGrowth = document.getElementById('text-help-growth');

    if (cardCore && cardGrowth) {
        if (state.brandHelpExpanded === 'core') {
            cardCore.classList.add('active');
            iconCore.className = 'ph ph-caret-up';
            textCore.style.color = 'var(--primary)';

            cardGrowth.classList.remove('active');
            iconGrowth.className = 'ph ph-caret-down';
            textGrowth.style.color = 'inherit';
        } else if (state.brandHelpExpanded === 'growth') {
            cardGrowth.classList.add('active');
            iconGrowth.className = 'ph ph-caret-up';
            textGrowth.style.color = 'var(--primary)';

            cardCore.classList.remove('active');
            iconCore.className = 'ph ph-caret-down';
            textCore.style.color = 'inherit';
        } else {
            cardCore.classList.remove('active');
            iconCore.className = 'ph ph-caret-down';
            textCore.style.color = 'inherit';

            cardGrowth.classList.remove('active');
            iconGrowth.className = 'ph ph-caret-down';
            textGrowth.style.color = 'inherit';
        }
    } else {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = views['build_brand_help']();
    }
}

function showVendorListing(title) {
    state.lastVendorTitle = title;
    state.showRefurbishedItems = false;
    navigateTo('vendor_listing');
}

function toggleRefurbishedItems() {
    state.showRefurbishedItems = !state.showRefurbishedItems;

    const listContainer = document.getElementById('vendor-list-container');
    const pillsContainer = document.getElementById('vendor-pills-container');

    if (listContainer && pillsContainer) {
        // Smooth transition for the list content
        gsap.to(listContainer, {
            opacity: 0,
            y: 10,
            duration: 0.15,
            onComplete: () => {
                // Create a temporary element to parse the new view HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = views['vendor_listing'](state.lastVendorTitle);

                // Extract only the parts we need to update
                const newListHTML = tempDiv.querySelector('#vendor-list-container').innerHTML;
                const newPillsHTML = tempDiv.querySelector('#vendor-pills-container').innerHTML;

                // Update the DOM
                listContainer.innerHTML = newListHTML;
                pillsContainer.innerHTML = newPillsHTML;

                // Reset scroll position and animate back in
                listContainer.scrollTop = 0;
                gsap.fromTo(listContainer,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
                );
            }
        });
    } else {
        // Fallback to full navigation if DOM elements aren't ready
        navigateTo('vendor_listing');
    }
}

function openChat(chatId) {
    state.activeChatId = chatId;
    navigateTo('chat_detail');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const text = (input?.value || '').trim();
    if (!text || !state.activeChatId) return;
    const chat = state.chats[state.activeChatId];
    if (!chat) return;

    const now = new Date();
    const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    chat.messages.push({ from: 'me', text, time });
    input.value = '';

    // Append message to DOM without full re-render
    const container = document.getElementById('chat-messages');
    if (container) {
        const msgEl = document.createElement('div');
        msgEl.style.cssText = 'display:flex;flex-direction:column;align-items:flex-end;';
        msgEl.innerHTML = `
            <div style="max-width:78%;padding:11px 15px;border-radius:18px 4px 18px 18px;background:#E8F3EA;color:var(--text-main);font-size:14px;line-height:1.5;box-shadow:0 1px 4px rgba(0,0,0,0.06);">${text}</div>
            <span style="font-size:10px;color:#9CA3AF;margin-top:4px;padding:0 4px;">${time}</span>`;
        container.appendChild(msgEl);
        container.scrollTop = container.scrollHeight;
    }
}

function goBackFromListing() {
    if (state.setupType === 'new_venture') {
        navigateTo('how_to_start');
    } else if (state.setupType === 'refurbished') {
        navigateTo('choosing_setup');
    } else {
        navigateTo('choosing_setup');
    }
}

function submitEnquiry() {
    alert('Enquiry submitted successfully!');
    navigateTo('welcome');
}

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) {
        // Create the container if missing
        document.body.innerHTML = `<div id="app"><main id="main-content"></main></div>`;
    }
    setTimeout(() => {
        navigateTo('welcome');
    }, 2000);

    // Mount initial splash
    document.getElementById('main-content').innerHTML = views['splash']();

    // Initial bounce/fade in for splash logo
    gsap.fromTo('#splash-logo', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
});

function toggleCustomSelect(event) {
    const select = event.currentTarget;
    select.classList.toggle('active');
}

function selectCountry(country, event) {
    event.stopPropagation();
    document.getElementById('selected-country').innerText = country;

    // Update radio buttons
    const options = event.currentTarget.closest('.custom-options').querySelectorAll('.custom-option');
    options.forEach(opt => {
        opt.classList.remove('selected');
        const circle = opt.querySelector('.radio-circle');
        circle.classList.remove('checked');
        circle.innerHTML = '';
    });

    const clickedOption = event.currentTarget;
    clickedOption.classList.add('selected');
    const circle = clickedOption.querySelector('.radio-circle');
    circle.classList.add('checked');
    circle.innerHTML = '<i class="ph ph-check"></i>';

    // close dropdown
    clickedOption.closest('.custom-select').classList.remove('active');
}

function selectPricePill(el) {
    const parent = el.parentElement;
    parent.querySelectorAll('.tag-pill').forEach(pill => {
        pill.classList.remove('selected');
        pill.style.background = '';
        pill.style.borderColor = '';
    });
    el.classList.add('selected');
    el.style.background = 'white';
    el.style.borderColor = 'var(--primary)';
}

function togglePill(event, element) {
    event.stopPropagation();
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        const icon = element.querySelector('i');
        if (icon) icon.remove();
    } else {
        element.classList.add('selected');
        element.innerHTML = '<i class="ph ph-x-circle" style="font-size: 16px;"></i> ' + element.innerHTML;
    }
}

function toggleCircleCheck(event, element) {
    event.stopPropagation();
    const checkbox = element.querySelector('.circle-checkbox');
    if (checkbox) {
        checkbox.classList.toggle('checked');
    }
}

function openFilterSheet(filterType) {
    const sheet = document.getElementById('filter-bottom-sheet');
    const sheetBody = document.getElementById('filter-sheet-body');
    const overlay = document.getElementById('filter-sheet-overlay');

    // Highlight the active pill
    const pillMap = { 'Location': 'pill-location', 'Price': 'pill-price', 'Rating': 'pill-rating', 'Refurbished Products': 'pill-refurbished', 'Refurbished': 'pill-refurbished' };
    Object.values(pillMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('selected');
        }
    });
    const activePill = document.getElementById(pillMap[filterType]);
    if (activePill) {
        activePill.classList.add('selected');
    }

    if (filterType === 'Location') {
        sheetBody.innerHTML = `
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
                <div class="tag-pill" onclick="togglePill(event , this);">Delhi-NCR</div>
                <div class="tag-pill" onclick="togglePill(event , this);">Mumbai</div>
                <div class="tag-pill" onclick="togglePill(event , this);">Kolkata</div>
                <div class="tag-pill" onclick="togglePill(event , this);">Goa</div>
                <div class="tag-pill" onclick="togglePill(event , this);">Bengaluru</div>
                <div class="tag-pill" onclick="togglePill(event , this);">Ahmedabad</div>
                <div class="tag-pill" onclick="togglePill(event , this);">Hyderabad</div>
            </div>
            <div style="position: relative; margin-bottom: 24px;">
                <i class="ph ph-magnifying-glass" style="position: absolute; left: 16px; top: 14px; color: var(--text-muted); font-size: 18px;"></i>
                <input type="text" placeholder="Search for other cities" class="input-field" style="padding-left: 48px;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                    <span>Agra</span><div class="circle-checkbox"></div>
                </div>
                <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                    <span>Aligarh</span><div class="circle-checkbox"></div>
                </div>
                <div class="circle-checkbox-row" onclick="toggleCircleCheck(event, this)">
                    <span>Ambala</span><div class="circle-checkbox"></div>
                </div>
            </div>
        `;
    } else if (filterType === 'Price') {
        sheetBody.innerHTML = `
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; justify-content: center;">
                <div class="tag-pill" onclick="selectPricePill(this)">Under ₹20,000</div>
                <div class="tag-pill selected" style="background: white; border-color: var(--primary);" onclick="selectPricePill(this)">₹20,000-₹50,000</div>
                <div class="tag-pill" onclick="selectPricePill(this)">Above ₹50,000</div>
            </div>
            <div style="padding: 0 10px; margin-bottom: 24px;">
                <div style="display: flex; justify-content: space-between; font-weight: 600; margin-bottom: 16px; font-size: 14px;">
                    <span>₹20,000</span>
                    <span id="price-max-display">₹80,000</span>
                </div>
                <div style="position: relative; height: 24px; display: flex; align-items: center;">
                    <input type="range" min="20000" max="150000" value="80000" step="5000" style="width: 100%; accent-color: var(--primary); cursor: pointer;" oninput="document.getElementById('price-max-display').innerText = '₹' + parseInt(this.value).toLocaleString()">
                </div>
            </div>
        `;
    } else if (filterType === 'Rating') {
        sheetBody.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 20px 0;">
                <h3 style="font-size: 16px; font-weight: 600; color: var(--text-main);">Minimum Rating</h3>
                <div id="dynamic-rating-container" style="display: flex; gap: 8px;">
                    ${[1, 2, 3, 4, 5].map(n => `
                    <i class="ph ph-star" id="rate-star-${n}" onclick="setRating(${n})" style="font-size: 36px; color: #D1D5DB; cursor: pointer; transition: color 0.2s, transform 0.1s;"></i>
                    `).join('')}
                </div>
                <div id="rating-text" style="font-size: 14px; color: var(--text-muted); height: 20px;">Select a rating</div>
            </div>
            <button class="btn btn-primary" style="margin-top: 20px; width: 100%;" onclick="closeFilterSheet()">Apply</button>
        `;
        window.setRating = function (rating) {
            for (let i = 1; i <= 5; i++) {
                const star = document.getElementById('rate-star-' + i);
                if (i <= rating) {
                    star.className = 'ph-fill ph-star';
                    star.style.color = '#10B981';
                    star.style.transform = 'scale(1.1)';
                    setTimeout(() => star.style.transform = 'scale(1)', 150);
                } else {
                    star.className = 'ph ph-star';
                    star.style.color = '#D1D5DB';
                    star.style.transform = 'scale(1)';
                }
            }
            const texts = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
            document.getElementById('rating-text').innerText = rating + " Star" + (rating > 1 ? "s" : "") + " - " + texts[rating - 1];
        };
    } else {
        sheetBody.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 12px; max-height: 50vh; overflow-y: auto; padding: 4px;">
                ${[
                { img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop', name: 'Refurbished Treadmill XR', price: '₹25,000', loc: 'Delhi NCR' },
                { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', name: 'Pre-owned Bench Press', price: '₹12,000', loc: 'Noida' },
                { img: 'Images/CardioMachines.jpg', name: 'Commercial Cross Trainer', price: '₹45,000', loc: 'Mumbai' }
            ].map(c => `
                <div style="display: flex; gap: 12px; background: white; border: 1.5px solid #F3F4F6; border-radius: 16px; padding: 12px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.02);">
                    <div style="width: 80px; height: 80px; border-radius: 10px; background: url('${c.img}') center/cover; flex-shrink: 0;"></div>
                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">${c.name}</h4>
                        <div style="font-size: 14px; color: var(--primary); font-weight: 600; margin-bottom: 6px;">${c.price}</div>
                        <div style="font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 4px;"><i class="ph ph-map-pin"></i> ${c.loc}</div>
                    </div>
                </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" style="margin-top: 20px; width: 100%;" onclick="closeFilterSheet(); setTimeout(()=>navigateTo('vendor_listing'),300)">View All Refurbished Products</button>
        `;
    }



    // Show sheet
    overlay.style.display = 'block';
    gsap.to(overlay, { opacity: 1, duration: 0.3 });
    gsap.to(sheet, { bottom: 0, duration: 0.3, ease: 'power2.out' });
}

function closeFilterSheet() {
    const sheet = document.getElementById('filter-bottom-sheet');
    const overlay = document.getElementById('filter-sheet-overlay');

    // Deselect filter pills
    const pillMap = { 'Location': 'pill-location', 'Price': 'pill-price', 'Rating': 'pill-rating', 'Refurbished Products': 'pill-refurbished', 'Refurbished': 'pill-refurbished' };
    Object.values(pillMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('selected');
    });

    gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => overlay.style.display = 'none'
    });
    gsap.to(sheet, { bottom: '-100%', duration: 0.3, ease: 'power2.in' });
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view) {
        if (state.history.length > 0) {
            state.history.pop();
        }
        if (event.state.title) {
            state.lastVendorTitle = event.state.title;
        }
        navigateTo(event.state.view, true, true);
    } else if (state.currentView !== 'welcome' && state.currentView !== 'splash') {
        navigateTo('welcome', true, true);
    }
});

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-cache").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/script.js"
            ]);
        })
    );
});