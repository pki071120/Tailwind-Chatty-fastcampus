import React from "react";
import support from "../assets/support.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Support = () => {
	return (
		<section name="support" className="w-full mt-24">
			<div className="w-full h-[700px] bg-slate-900/90 absolute">
				<img
					src={support}
					alt="support"
					className="object-cover w-full h-full mix-blend-overlay"
				/>
			</div>
			<div className="max-w-[1240px] mx-auto text-white relative">
				<div className="px-4 py-12">
					<h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
						Support
					</h2>
					<h3 className="py-6 text-5xl font-bold text-center">
						We support you
					</h3>
					<p className="py-4 text-3xl text-slate-300">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.{" "}
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 px-4 pt-12 text-black gap-x-8 gap-y-16 sm:pt-20">
					<div className="bg-white shadow-2xl rounded-xl">
						<div className="p-8">
							<h3 className="my-6 text-2xl font-bold">Support</h3>
							<p className="text-gray-600 text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
						<div className="py-4 pl-8 bg-slate-100">
							<p className="flex items-center text-blue-600">
								More Info...
								<FaArrowRight className="w-5 ml-2" />
							</p>
						</div>
					</div>
					<div className="bg-white shadow-2xl rounded-xl">
						<div className="p-8">
							<h3 className="my-6 text-2xl font-bold">Support</h3>
							<p className="text-gray-600 text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
						<div className="py-4 pl-8 bg-slate-100">
							<p className="flex items-center text-blue-600">
								More Info...
								<FaArrowRight className="w-5 ml-2" />
							</p>
						</div>
					</div>
					<div className="bg-white shadow-2xl rounded-xl">
						<div className="p-8">
							<h3 className="my-6 text-2xl font-bold">Support</h3>
							<p className="text-gray-600 text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
						<div className="py-4 pl-8 bg-slate-100">
							<p className="flex items-center text-blue-600">
								More Info...
								<FaArrowRight className="w-5 ml-2" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Support;
