import { useState } from 'react';
import Container from './component/Container';

function App() {
	const [data] = useState([
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
			location: '144 W Elm st,Chicago,IL 60610, USA',
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
			{/* message icon */}
			<div className="w-14 h-14 rounded-full flex items-center justify-center bg-amber-600 p-3 text-black fixed bottom-5 right-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="512"
					height="512"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M144 464a16 16 0 0 1-16-16v-64h-24a72.08 72.08 0 0 1-72-72V120a72.08 72.08 0 0 1 72-72h304a72.08 72.08 0 0 1 72 72v192a72.08 72.08 0 0 1-72 72H245.74l-91.49 76.29A16.05 16.05 0 0 1 144 464Z"
					/>
				</svg>
			</div>
		</>
	);
}

export default App;
