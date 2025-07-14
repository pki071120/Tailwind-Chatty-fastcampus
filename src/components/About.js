import React from "react";

const About = () => {
	return (
		<section className="w-full h-screen " name="about">
			<div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
				<div className="text-center">
					<h2 className="text-5xl font-bold">About this company</h2>
					<p className="py-6 text-3xl text-gray-500">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
				<p className="mt-20 text-xl">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<p className="mt-20 text-xl">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
			</div>
		</section>
	);
};

export default About;
