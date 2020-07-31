import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
	const [data] = useState([
		{
			id: 1,
			name: 'Apex Legends',
			img: 'https://img.gfinityesports.com/news/image/7/5/1500x0-nc/apex_legends_season_5_MzOXISo.jpg',
			type: 'game',
			developer: 'Respawn Entertainment',
			description:
				'Apex Legends is a free-to-play first-person shooter battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One on February 4, 2019, without any prior announcement or marketing.',
			youtube: 'https://www.youtube.com/embed/oQtHENM_GZU',
		},
		{
			id: 2,
			name: 'Call of Duty: Modern Warfare',
			img:
				'https://image-cdn.essentiallysports.com/wp-content/uploads/20200702170542/Call-of-Duty-Modern-Warfare-720.jpg',
			type: 'game',
			developer: 'Infinity Ward',
			description:
				'Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision.',
			youtube: 'https://www.youtube.com/embed/bH1lHCirCGI',
		},
		{
			id: 3,
			name: 'Cyberpunk 2077',
			img: 'https://images.gog-statics.com/7a3439f4b2e20a37518c773e2bcb236cb3b8ec0b7a30e7fad458cdf2a7004f61.jpg',
			type: 'game',
			developer: 'CD Projekt RED',
			description:
				'Cyberpunk 2077 is an upcoming role-playing video game developed and published by CD Projekt. It is scheduled to be released for PlayStation 4, Windows, and Xbox One on 19 November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X in 2021.',
			youtube: 'https://www.youtube.com/embed/UjxS9ciNlII',
		},
		{
			id: 4,
			name: 'Assassins Creed Valhalla',
			img: 'https://cdn.wccftech.com/wp-content/uploads/2020/05/Assassins-Creed-Valhalla-release-date-october.jpg',
			type: 'game',
			developer: 'Ubisoft Montreal',
			description:
				'Assassins Creed Valhalla is an upcoming action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassins Creed series, and a successor to the 2018 game Assassins Creed Odyssey.',
			youtube: 'https://www.youtube.com/embed/ssrNcwxALS4',
		},
		{
			id: 5,
			name: 'Halo Infinite',
			img:
				'https://cdn.vox-cdn.com/thumbor/fxrC6nMstLg7klG5eQQor-r3kmg=/0x0:1813x1197/1200x800/filters:focal(762x454:1052x744)/cdn.vox-cdn.com/uploads/chorus_image/image/67137007/haloinfinite.0.jpg',
			type: 'game',
			developer: 'Xbox Game Studios',
			description:
				'Halo Infinite is an upcoming first-person shooter game developed by 343 Industries and published by Xbox Game Studios for Windows, Xbox One, and Xbox Series X. It is planned as a launch game for Xbox Series X in late 2020, the sixth main entry of the Halo series, and the fourteenth game overall.',
			youtube: 'https://www.youtube.com/embed/pTp3W0mlsJA',
		},
		{
			id: 6,
			name: 'Horizon Forbidden West',
			img: 'https://www.videogameschronicle.com/files/2020/06/EaRCcHYXkAEIWru-scaled.jpg',
			type: 'game',
			developer: 'Guerrilla Games',
			description:
				'Horizon Forbidden West is an upcoming action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment, and set to be released in 2021 for the PlayStation 5. It is the sequel to Horizon Zero Dawn, and is played in a post-apocalyptic open world with a third-person perspective.',
			youtube: 'https://www.youtube.com/embed/Lq594XmpPBg',
		},
	]);
	const [selectedData, setSelectedData] = useState(data[0]);
	const getObject = (object) => {
		console.log('Object Data', object);
		setSelectedData(object);
	};
	return (
		<Fragment>
			<main>
				<section className="main-container">
					{selectedData === data[0] ? (
						<div className="main-content">
							<div className="main-img">
								{/* Uncomment the image and comment out the iframe if you want to use an image instead of a video */}
								{/* <img src={selectedData.img} alt={selectedData.name} /> */}
								<iframe
									title={selectedData.id}
									width="100%"
									height="400"
									src={selectedData.youtube}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<div className="main-title">
								<h1>{selectedData.name}</h1>
							</div>
							<div className="main-description">
								<p>{selectedData.description}</p>
							</div>
						</div>
					) : (
						<div className="main-content">
							<div className="main-img">
								{/* Uncomment the image and comment out the iframe if you want to use an image instead of a video */}
								{/* <img src={selectedData.img} alt={selectedData.name} /> */}
								<iframe
									title={selectedData.id}
									width="100%"
									height="400"
									src={selectedData.youtube}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<div className="main-title">
								<h1>{selectedData.name}</h1>
							</div>
							<div className="main-description">
								<p>{selectedData.description}</p>
							</div>
						</div>
					)}
				</section>
				<aside className="sidebar-container">
					{data.map((games) => (
						<div className="sidebar" key={games.id} onClick={() => getObject(games)}>
							<div className="sidebar-img">
								<img src={games.img} alt={games.name} />
							</div>
							<div className="sidebar-content">
								<h1>{games.name}</h1>
								<p>{games.type}</p>
								<p>{games.developer}</p>
							</div>
						</div>
					))}
				</aside>
			</main>
		</Fragment>
	);
};

export default App;
