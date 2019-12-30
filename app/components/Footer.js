import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small blue footer">
                <div className="logo">

                    <a href="http://www.dpdhl.com" title="Deutsche Post DHL Group" target="_blank">
                        <img src="https://www.dhl.com/content/g0/en/_jcr_content/standardtemplatefooter/image.img.gif/1565685813654.gif" width="139" alt="Deutsche Post DHL Group Logo" title="Deutsche Post DHL Group" className="cq-dd-image" height="34" />

                        <img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Deutsche Post DHL Group" /></a>
                </div>
            </footer>
            // <footer className="page-footer font-small blue footer">
    //             <div className="standardtemplatefooter" id="standardtemplatefooter-container"><div className="faceliftStandardFooter">
    // <div className="footer">
    //     <a id="footer"></a>
    //             <div className="container">
    //                 <div className="logo">

    //                     <a href="http://www.dpdhl.com" title="Deutsche Post DHL Group" target="_blank">
    //                         <img src="https://www.dhl.com/content/g0/en/_jcr_content/standardtemplatefooter/image.img.gif/1565685813654.gif" width="139" alt="Deutsche Post DHL Group Logo" title="Deutsche Post DHL Group" className="cq-dd-image" height="34" />

    //                         <img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Deutsche Post DHL Group" /></a>
    //                 </div>
    //                 <div className="advanced_footer_content">
    //                     <div className="parsys containerfooterlinklist">
    //                         <a name="standardtemplatefooter_containerfooterlinklist_footerlinklists" style={{ visibility: "hidden" }}></a><div className="footerlinklists section"><div className="link_box"><h6><a href="/en/contact_center.html" className="contact_center" target="_self">Contact Center</a></h6><ul><li><a href="/en/contact_center/contact_express.html" className="arrowLink" target="_self">DHL Express</a></li><li><a href="/en/contact_center/contact_parcel_ecommerce.html" className="arrowLink" target="_self">DHL Parcel &amp; eCommerce</a></li><li><a href="/en/contact_center/contact_global_forwarding.html" className="arrowLink" target="_self">DHL Global Forwarding</a></li><li><a href="/en/contact_center/contact_freight.html" className="arrowLink" target="_self">DHL Freight</a></li><li><a href="/en/contact_center/contact_supplychain.html" className="arrowLink" target="_self">DHL Supply Chain</a></li></ul></div>
    //                         </div>
    //                         <a name="standardtemplatefooter_containerfooterlinklist_footerlinklists_0" style={{ visibility: "hidden" }}></a><div className="footerlinklists section"><div className="link_box"><h6><a href="/en/about_us.html" className="arrowLink" target="_self">About Us</a></h6><ul><li><a href="/en/about_us/partnerships.html" className="arrowLink" target="_self">Partnerships</a></li><li><a href="/en/about_us/company_portrait.html" className="arrowLink" target="_self">Company Portrait</a></li><li><a href="/en/about_us/green_solutions.html" className="arrowLink" target="_self">Green Solutions</a></li><li><a href="/en/about_us/innovation.html" className="arrowLink" target="_self">Innovation</a></li><li><a href="/en/about_us/logistics_insights.html" className="arrowLink" target="_self">Logistics Insights</a></li><li><a href="/en/about_us/sector_overview.html" className="arrowLink" target="_self">Sector Overview</a></li><li><a href="/en/about_us/responsibility.html" className="arrowLink" target="_self">Corporate Responsibility</a></li></ul></div>
    //                         </div>
    //                         <a name="standardtemplatefooter_containerfooterlinklist_footerlinklists_1" style={{ visibility: "hidden" }}></a><div className="footerlinklists section"><div className="link_box"><h6><a href="" target="_self">Social Media</a></h6><ul><li><a href="http://www.facebook.com/dhl" className="facebook" target="_blank">Facebook<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window" /></a></li><li><a href="http://www.youtube.com/dhl" className="youtube" target="_blank">YouTube<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window" /></a></li></ul></div>
    //                         </div>
    //                         <a name="standardtemplatefooter_containerfooterlinklist_footerlinklists_2" style={{ visibility: "hidden" }}></a><div className="footerlinklists section"><div className="link_box"><h6><a href="/en/legal/fraud_awareness.html" className="alert" target="_self">Fraud Awareness</a></h6><ul><li><a href="" target="_self"> </a></li></ul></div>
    //                         </div>

    //                     </div>
    //                     <div className="partnerlogolinks"><div className="partner_box">

    //                         <h6>Official Logistics Partner</h6>
    //                         <ul>
    //                             <li><a href="http://www.dhl.com/f1 " target="_blank" title="Formula 1"><img src="https://www.dhl.com/content/dam/General%20DHL%20pictures/Logos/IA_Refresh/f1_logo_3_63px.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Formula 1" /></a></li>
    //                             <li><a href="http://www.dhl.com/leipziggewandhaus" target="_blank" title="Gewandhaus Orchestra"><img src="https://www.dhl.com/content/dam/General%20DHL%20pictures/Logos/IA_Refresh/partner_gwo.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Gewandhaus Orchestra" /></a></li>
    //                             <li><a href="http://www.dhl.com/fe" target="_blank" title="Formula E"><img src="https://www.dhl.com/content/dam/General%20DHL%20pictures/Logos/IA_Refresh/fia_formulae.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Formula E" /></a></li>
    //                             <li><a href="http://www.dhl.com/manchesterunited" target="_blank" title="Manchester United"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/manu_logo_38px.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Manchester United" /></a></li>
    //                             <li><a href="http://www.dhl.com/sevensworldseries" target="_blank" title="HSBC Sevens World Series"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/wrss_new.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: HSBC Sevens World Series" /></a></li>
    //                             <li><a href="http://www.dhl.com/motogp" target="_blank" title="Moto GP"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/motogp_new_2.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Moto GP" /></a></li>
    //                             <li><a href="http://www.dhl.com/bayern" target="_blank" title="FC Bayern Munich"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/partner_fcb.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: FC Bayern Munich" /></a></li>
    //                             <li><a href="http://www.dhl.com/wtcc" target="_blank" title="FIA WTCC"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/wtcc_new.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: FIA WTCC" /></a></li>
    //                             <li><a href="http://www.dhl.com/rollingstones" target="_blank" title="Rolling Stones"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/rolling_stones_new.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Rolling Stones" /></a></li>
    //                             <li><a href="http://www.dhl.com/wec" target="_blank" title="FIA World Endurance Championship"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/wec_new.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: FIA World Endurance Championship" /></a></li>
    //                             <li><a href="/en/about_us/partnerships/sports/rugby_world_cup_2019.html" target="_blank" title="Rugby World Cup 2019"><img src="https://www.dhl.com/content/dam/General DHL pictures/Logos/IA_Refresh/rwc_2019.png" /><img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="New Window: Rugby World Cup 2019" /></a></li>
    //                         </ul>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 <div className="footer_navigation">
    //                     <div className="standardtemplatefooterlinks"><ul><li className="firstItem"><a href="/en/sitemap.html" title="Sitemap" target="_self">Sitemap<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="Sitemap" /></a></li><li><a href="https://www.logistics.dhl/global-en/home/footer/accessibility.html" title="Accessibility" target="_blank">Accessibility<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Accessibility" /></a></li><li><a href="https://www.logistics.dhl/global-en/home/footer/legal-notice.html" title="Legal Notice" target="_blank">Legal Notice<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Legal Notice" /></a></li><li><a href="https://www.logistics.dhl/global-en/home/footer/terms-of-use.html" title="Terms of Use" target="_blank">Terms of Use<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Terms of Use" /></a></li><li><a href="https://www.logistics.dhl/global-en/home/footer/global-privacy-notice.html" title="Privacy Notice" target="_blank">Privacy Notice<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Privacy Notice" /></a></li><li><a href="/en/using_dhl_websites.html" title="Using DHL Websites" target="_self">Using DHL Websites<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="Using DHL Websites" /></a></li><li><a href="https://www.logistics.dhl/global-en/home/footer/dispute-resolution.html" title="Dispute Resolution" target="_blank">Dispute Resolution<img src="https://www.dhl.com/js/lib/dijit/form/templates/blank.gif" className="blank_gif" alt="External Link / New Window: Dispute Resolution" /></a></li></ul></div>
    //                     <p>
    //                         <a href="/en/legal.html" target="_self">
    //                             2019 © DHL International GmbH. All rights reserved.</a>
    //                     </p>
    //                 </div>

    //                 <div className="clearAll">&nbsp;</div>
    //             </div>
    //             </div>
    //             </div>
    //             </div>
            // </footer>
        );
    }
}