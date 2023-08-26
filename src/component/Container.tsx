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
		<div className="flex gap-8 border-b-2 items-center border-b-[#545454] p-8">
			<div className="flex flex-col  font-bold text-2xl text-white uppercase">
				<h1>
					{day}
					<span className="hidden md:inline">TH</span>
				</h1>
				<h1>{month}</h1>
			</div>
			<div className="flex flex-col  md:flex-row md:gap-11">
				<div className="self-center">
					<div className="border-b-2 border-b-[#545454]">
						<h1 className="text-white text-xl">{title}</h1>
					</div>
					<p className="text-white hidden  md:inline">{text}</p>
					<a
						className="flex gap-1 mt-2 text-amber-600 hover:underline"
						href="#"
					>
						+ Event Details
					</a>
				</div>
				<div className="">
					<div className="border-b-2 border-b-[#545454]">
						<h2 className="text-white font-medium">
							{startTime} - {endTime}
						</h2>
					</div>
					<p className="text-[#545454]">{location}</p>
				</div>
			</div>
		</div>
	);
};

export default Container;
