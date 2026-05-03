import re

with open("app.js", "r") as f:
    content = f.read()

# 1. Update vendor_listing cards
def make_new_card(img, title, location, verified, price, features, rating, reviews):
    verified_html = """<div style="background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); padding: 4px 8px; border-radius: 12px; font-size: 11px; display: flex; align-items: center; gap: 4px;">
                                    <i class="ph ph-check-circle" style="color: var(--accent);"></i> Verified
                                </div>""" if verified else ""
    return f"""                <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-sm);">
                    <div style="position: relative; height: 160px; background: url('{img}') center/cover;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 16px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                                <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 0;">{title}</h3>
                                {verified_html}
                            </div>
                        </div>
                    </div>
                    <div style="padding: 16px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: var(--text-main); font-weight: 500;">
                                <i class="ph ph-map-pin" style="font-size: 16px;"></i> {location}
                            </div>
                            <div style="display: flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 600; color: var(--text-main);">
                                <i class="ph ph-star" style="font-size: 16px; color: #FBBF24;"></i> {rating} ( {reviews} reviews )
                            </div>
                        </div>
                        <div style="color: var(--text-muted); display: flex; flex-direction: column; gap: 8px; font-size: 13px; margin-bottom: 20px; margin-left: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 4px; height: 4px; background: var(--text-muted); border-radius: 50%;"></div> {price}</div>
                            <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 4px; height: 4px; background: var(--text-muted); border-radius: 50%;"></div> {features}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <button class="btn btn-primary" style="padding: 12px; font-size: 14px;" onclick="navigateTo('vendor_detail')">View Profile</button>
                            <button class="btn btn-secondary" style="padding: 12px; font-size: 14px; background: #EAE6FF; color: #111827; border: none; font-weight: 600;" onclick="navigateTo('enquiry')">Send Enquiry</button>
                        </div>
                    </div>
                </div>"""

cards_html = f"""{make_new_card('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop', 'Premium Fitness Solutions', 'Noida, Uttar Pradesh', True, 'Starting from 30 Lakhs', 'Commercial gyms, Turnkey setups', '4.3', '120')}
{make_new_card('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop', 'FitTech Equipments', 'Delhi NCR', True, 'Starting from 15 Lakhs', 'Cardio machines, Weights', '4.1', '85')}
{make_new_card('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop', 'ProGym Makers', 'Mumbai, Maharashtra', True, 'Starting from 40 Lakhs', 'Premium Gyms, Crossfit', '4.8', '240')}"""

start_str = "<!-- Vendor Card 1 -->"
end_str = "            </div>\n\n            <!-- Bottom Sheet Overlay & Container -->"
start_idx = content.find(start_str)
end_idx = content.find(end_str, start_idx)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + cards_html + "\n" + content[end_idx:]

# 2. Fix the View All button in Dashboard
view_all_str = """<div style="font-size: 13px; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 4px;">View All <i class="ph ph-caret-right"></i></div>"""
new_view_all_str = """<div style="font-size: 13px; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 4px; cursor: pointer;" onclick="navigateTo('my_requirements_list')">View All <i class="ph ph-caret-right"></i></div>"""
content = content.replace(view_all_str, new_view_all_str)

# 3. Add my_requirements_list view
def make_req_card(title, vendors, date, img):
    return f"""                <div style="margin-bottom: 16px;">
                    <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-sm);">
                        <div style="height: 140px; background: url('{img}') center/cover;"></div>
                        <div style="padding: 16px;">
                            <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 4px;">{title}</h3>
                            <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">{vendors}</div>
                            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 16px;">{date}</div>
                            <button class="btn btn-primary" style="padding: 12px; font-size: 14px; width: 100%;" onclick="navigateTo('vendor_detail')">View Details</button>
                        </div>
                    </div>
                </div>"""

my_reqs_html = f"""    my_requirements_list: () => `
        <div class="onboarding-screen" style="background: #F3F4F6; height: 100vh; overflow-y: auto;">
            <div style="background: var(--primary); padding: 40px 20px 20px; color: white;">
                <div style="display: flex; align-items: center;">
                    <i class="ph ph-caret-left" onclick="goBack()" style="font-size: 24px; cursor: pointer;"></i>
                    <h1 style="font-size: 20px; font-weight: 700; flex: 1; text-align: center; margin-right: 24px;">My Requirements</h1>
                </div>
            </div>
            <div style="padding: 20px;">
{make_req_card('Fitness Equipment', '3 vendors matched', 'Posted on 26th February, 2026', 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop')}
{make_req_card('Cardio Machines', '5 vendors matched', 'Posted on 24th February, 2026', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop')}
{make_req_card('Strength Training setup', '12 vendors matched', 'Posted on 15th February, 2026', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop')}
{make_req_card('Crossfit Equipments', '2 vendors matched', 'Posted on 10th February, 2026', 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=600&auto=format&fit=crop')}
{make_req_card('Gym Layout Services', '8 vendors matched', 'Posted on 5th February, 2026', 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop')}
            </div>
        </div>
    `,
"""

dashboard_idx = content.find("    dashboard: () => `")
if dashboard_idx != -1:
    content = content[:dashboard_idx] + my_reqs_html + content[dashboard_idx:]

with open("app.js", "w") as f:
    f.write(content)

print("Done")
