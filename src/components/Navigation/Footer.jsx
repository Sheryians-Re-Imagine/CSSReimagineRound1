import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-8 w-full relative top-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="font-bold text-lg">PUMA</h2>
                    <p className="mt-2">
                        PUMA is a leading sports brand that designs, develops, sells, and markets footwear, apparel, and accessories.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Quick Links</h2>
                    <ul className="mt-2 space-y-1">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Men</a></li>
                        <li><a href="#" className="hover:underline">Women</a></li>
                        <li><a href="#" className="hover:underline">Kids</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Follow Us</h2>
                    <div className="flex mt-2 space-x-4">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Twitter</a>
                        <a href="#" className="hover:underline">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-8">
                © 2024 PUMA SE, all rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
