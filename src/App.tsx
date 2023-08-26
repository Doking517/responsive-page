import { useState } from 'react';
import Container from './component/Container';

function App() {
	const [data, setdata] = useState([
		{
			title: 'Sunday Super Club',
			text: 'A culinary event with foods from all over the word. This is a weekly club you can join for a small fee. Learn cooking methods from top chef...',
			startTime: '16:00',
			endTime: '19:00',
			day: 11,
			month: 'NOV',
			location: '144 W Elm st,Chicago,IL 60610,USA',
		},
		{
			title: 'Evenings in the Park',
			text: 'We invite you to listen to live bands play beautiful music in the park.Enjoy the sounds of Laureen Davis and the Kings,and enjoy wine tast...',
			startTime: '6:30',
			endTime: '8:30',
			day: 13,
			month: 'NOV',
			location: 'Estuary Park',
		},
		{
			title: 'Morning Brew & View',
			text: 'Enjoy free samples of our latest brews while overlooking the beautiful site of our city.Plenty of iced and hot teas,plus gourmet coffee d...',
			startTime: '08:00',
			endTime: '15:00',
			day: 15,
			month: 'NOV',
			location: 'The Teapot and Brew Club',
		},
		{
			title: 'Sunday Super Club',
			text: 'A culinary event with foods from all over the word. This is a weekly club you can join for a small fee. Learn cooking methods from top chef...',
			startTime: '6:30',
			endTime: '8:30',
			day: 13,
			month: 'NOV',
			location: '144 W Elm st,Chicago,IL 60610,USA',
		},
		{
			title: 'Super Saturday Sale',
			text: 'We invite you to listen to live bands play beautiful music in the park.Enjoy the sounds of Laureen Davis and the Kings,and enjoy wine tast...',
			startTime: '16:00',
			endTime: '19:00',
			day: 11,
			month: 'NOV',
			location: '144 W Elm st,Chicago,IL 60610,USA',
		},
		{
			title: 'Wednesday of brews',
			text: 'Enjoy free samples of our latest brews while overlooking the beautiful site of our city.Plenty of iced and hot teas,plus gourmet coffee d...',
			startTime: '16:00',
			endTime: '19:00',
			day: 11,
			month: 'NOV',
			location: '144 W Elm st,Chicago,IL 60610,USA',
		},
	]);
	return (
		<>
			<section className="bg-[#161616]">
				<div className="mx-2 md:mx-8 p-5 flex flex-col">
					<h2 className="bg-white self-center text-black uppercase py-1 px-3  ">
						Events
					</h2>
					{data.map((item, i) => (
						<div key={i}>
							<Container
								title={item.title}
								text={item.text}
								startTime={item.startTime}
								endTime={item.endTime}
								month={item.month}
								day={item.day}
								location={item.location}
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default App;
