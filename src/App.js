import { Routes, Route, Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import './App.css';

import { render } from '@testing-library/react';


// 1 практика


// import  Home  from './Components/Home';
// import  About  from './Components/About';
// import  Blog  from './Components/Blog.js';
// import  Contacts  from './Components/Contacts';

// function App() {
//   return (
//     <>
//       <header className='App-header'>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//        <li> <Link to="/posts">Blog</Link></li>
//      <li > <Link to="/about">About</Link></li>
//         </ul>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/posts" element={<Blog />} />
//         <Route path="*" element={<Contacts />} />
//       </Routes>
//     </>
//   );
// }


// 2 практика

// const App = () => {
//   const players = [
//     {position: 'Левый столб', name:'Алексей Скобиола', team:'Регбии Клуб СЛАВА'},
//     {position: 'Хукер', name:'Сергей Чернышев', team:'Регбии Клуб СЛАВА'},
//     {position: 'Правый столб', name:'Андрей Игрецов', team:'Регбии Клуб СЛАВА'},
//     {position: 'Вратарь', name:'Антон Шумин', team:'Динамо Москва'},
//   ];
//   const renderPlayer = (player, index) => {
//     return (
//       <tr key={index}>
//         <td>{ player.position}</td>
//         <td>{ player.name}</td>
//         <td>{ player.team}</td>
//       </tr>
//    );
//   }
//   return (
//     <><div className='App'>
//       <h1>Здесь будет таблица</h1>
//     </div>
//       <ReactBootStrap.Table className="table table-striped table-dark">
//         <thead>
//           <tr>

//             <th scope="col">Позиция</th>
//             <th scope="col">Имя</th>
//             <th scope="col">Команда</th>
//           </tr>
//         </thead>
//         <tbody>
//           {players.map(renderPlayer)}

//         </tbody>
//       </ReactBootStrap.Table></>



//   );
// }

// 3 практика
// import Header from './Components/Header'
// function App() {
//   return (
//     <Header />
//   )
// }


// 4 практика
import  CarouselBox from './Components/CarouselBox';
function App() {
  return (
    <CarouselBox />
  )
}

// 5 практика


// import  SideCard from './Components/SideCard';
// function App() {
//   return (
//     <SideCard />
//   )
// }


export default App;