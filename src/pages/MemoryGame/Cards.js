import { useState, useEffect } from 'react'
import Card from './Card'
import img1 from '../../assets/img/bart.png'
import img2 from '../../assets/img/lisa.png'
import img3 from '../../assets/img/maggie.png'
import img4 from '../../assets/img/marge.png'
import img5 from '../../assets/img/bart1.png'
import img6 from '../../assets/img/homer.png'
import img7 from '../../assets/img/bart2.png'
import img8 from '../../assets/img/homer2.png'

const cards = [
    { id: 1, idx: 1, img: img1, stat: "" },
    { id: 1, idx: 2, img: img1, stat: "" },
    { id: 2, idx: 3, img: img2, stat: "" },
    { id: 2, idx: 4, img: img2, stat: "" },
    { id: 3, idx: 5, img: img3, stat: "" },
    { id: 3, idx: 6, img: img3, stat: "" },
    { id: 4, idx: 7, img: img4, stat: "" },
    { id: 4, idx: 8, img: img4, stat: "" },
    { id: 5, idx: 9, img: img5, stat: "" },
    { id: 5, idx: 10, img: img5, stat: "" },
    { id: 6, idx: 11, img: img6, stat: "" },
    { id: 6, idx: 12, img: img6, stat: "" },
    { id: 7, idx: 13, img: img7, stat: "" },
    { id: 7, idx: 14, img: img7, stat: "" },
    { id: 8, idx: 15, img: img8, stat: "" },
    { id: 8, idx: 16, img: img8, stat: "" }
];

function Cards({handledMoves}){
    const [items, setItems] = useState(cards.sort(() => Math.random() - 0.5));
    const [corrects, setCorrects] = useState(0);
    const [moves, setMove] = useState(0);
    const [prev, setPrev] = useState(-1);

    const restartBoard = () => {
        cards.forEach(item => item.stat = "")
        setItems(cards.sort(() => Math.random() - 0.5));
        setPrev(-1);
        setMove(0);
        setCorrects(0);
        handledMoves(0,0);
    }

    function check(current) {
        const samePostion = items[current].idx !== items[prev].idx;
        console.log('40', 'samePostion',items[current].idx, samePostion);
        if(items[current].id === items[prev].id && samePostion){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setCorrects(corrects+1)
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if (corrects === 8) {
            return;
        }
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            setMove(moves+1)
            check(id)
        }
        console.log('73', 'corrects', corrects);
    }

    useEffect(() => {
        if (corrects === 8) {
            handledMoves(moves, corrects);
        }
      }, [corrects, handledMoves, moves]);

    return (
        <>
            <div className="container">
                { items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                )) }
            </div>
            <div>
                <button className='button-container' hidden={!moves} onClick={() => restartBoard()}>Restart</button>
                <h4>Moves {moves} {corrects}</h4>
            </div>
        </>
    )
}

export default Cards
