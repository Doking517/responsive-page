type ContainerProps = {
	day: number;
	month: string;
	title: string;
	text: string;
	startTime: string;
	endTime: string;
	location: string;
};

const Container = ({
	day,
	month,
	title,
	text,
	startTime,
	endTime,
	location,
}: ContainerProps) => {
	return (
		<div className="flex flex-col md:flex-row md:gap-8 border-b-2 md:items-center border-b-[#545454] p-8 md:p-10">
			<div className="flex flex-row gap-2 md:flex-col  font-bold text-2xl text-white uppercase">
				<h1>
					{day}
					<span className="hidden md:inline">TH</span>
				</h1>
				<h1>{month}</h1>
			</div>
			<div className="flex flex-col md:justify-between md:self-center md:px-5 md:flex-row md:gap-11">
				<div className="md:px-12 flex-1 ">
					<h1 className="text-white md:py-2 text-xl border-b-2 md:mb-2 border-b-[#545454]">
						{title}
					</h1>

					<p className="text-white hidden md:inline">{text}</p>
					<a
						className="flex gap-1 mt-2 text-amber-600 hover:underline"
						href="#"
					>
						+ Event Details
					</a>
				</div>
				<div className="md:w-[19%] ">
					<h2 className="text-white md:py-2 font-medium text-xl  md:mb-2  underline underline-offset-8 decoration-[#545454] md:text-right ">
						{startTime} - {endTime}
					</h2>

					<p className="text-[#545454] md:text-right">{location}</p>
				</div>
			</div>
		</div>
	);
};

export default Container;
