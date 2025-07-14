import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaTwitch,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer name="footer" className="w-full px-2 bg-slate-700 text-gray-300">
			<div className="max-w-[1240px] mx-auto grid gird-cols-2 md:grid-cols-6 border-b border-gray-600 py-8">
				<div className="text-center">
					<h6 className="pt-2 font-bold uppercase">Solutions</h6>
					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analytics</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Data</li>
					</ul>
				</div>
				<div className="text-center">
					<h6 className="pt-2 font-bold uppercase">Solutions</h6>
					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analytics</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Data</li>
					</ul>
				</div>
				<div className="text-center">
					<h6 className="pt-2 font-bold uppercase">Solutions</h6>
					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analytics</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Data</li>
					</ul>
				</div>
				<div className="text-center">
					<h6 className="pt-2 font-bold uppercase">Solutions</h6>
					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analytics</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Data</li>
					</ul>
				</div>
				<div className="col-span-2 pt-8 md:pt-2">
					<p className="font-bold uppercase">Subscribe to our newsletter</p>
					<p className="py-4">
						The latest news, articles, and resources, sent to your inbox weekly.
					</p>
					<form className="flex flex-col sm:flex-row">
						<input
							className="w-full p-2 rounded-md mb-4 mr-4"
							type="email"
							placeholder="Enter email"
						/>
						<button className="p-2 mb-4">Subscribe</button>
					</form>
				</div>
			</div>

			<div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
				<p className="py-4">2022 Chatty, LLC, All rights reserved</p>
				<div className="flex justify-between sm:w-[300px] py-4 text-2xl">
					<FaFacebook /> <FaInstagram /> <FaTwitter /> <FaTwitch /> <FaGithub />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
