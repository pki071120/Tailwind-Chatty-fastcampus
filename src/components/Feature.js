import React from "react";
import { FaCheck } from "react-icons/fa";

const Feature = () => {
	return (
		<section name="feature" className="w-full my-32">
			<div className="max-w-[1240px] mx-auto px-2">
				<h2 className="text-5xl font-bold text-center">Features</h2>
				<p className="py-8 text-2xl text-center text-gray-500">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
					<div className="flex ">
						<FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
						<div>
							<h3 className="text-lg font-bold">Real-Time</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
					</div>
					<div className="flex ">
						<FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
						<div>
							<h3 className="text-lg font-bold">Real-Time</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
					</div>
					<div className="flex ">
						<FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
						<div>
							<h3 className="text-lg font-bold">Real-Time</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
					</div>
					<div className="flex ">
						<FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
						<div>
							<h3 className="text-lg font-bold">Real-Time</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, quos.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
