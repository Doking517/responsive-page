type BannerTitleProps = {
	title: string;
};

const BannerTitle = ({ title }: BannerTitleProps) => {
	return (
		<div className="p-2 bg-[#FFFFFF]">
			<h1>{title}</h1>
		</div>
	);
};

export default BannerTitle;
