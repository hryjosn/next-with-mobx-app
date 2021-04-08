import React, { useEffect, useRef, useState } from 'react';
import { MyBoard } from '../styles/Board.style';
import io from 'socket.io-client';

const Board = () => {
    const canvasRef = useRef(null);
    const colorsRef = useRef(null);
    const socketRef = useRef();
    const [color, setColor] = useState('black');
    // --------------- getContext() method returns a drawing context on the canvas-----

    let canvas;
    let context;
    const drawLine = (x0, y0, x1, y1, color, emit) => {
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.strokeStyle = color;
        context.lineWidth = 10;
        context.stroke();
        context.closePath();

        // if (!emit) {
        //     return;
        // }
        // const w = canvas.width;
        // const h = canvas.height;
        // socketRef.current.emit('drawing', {
        //     x0: x0 / w,
        //     y0: y0 / h,
        //     x1: x1 / w,
        //     y1: y1 / h,
        //     color,
        // });
    };

    // ---------------- mouse movement --------------------------------------
    const current = {};
    let drawing = false;
    const onMouseDown = (e) => {
        drawing = true;
        current.x = e.clientX || e.touches[0].clientX;
        current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseMove = (e) => {
        // console.log('--onMouseMove--');
        // console.log('drawing:', drawing);
        // console.log('--onMouseMove--');

        if (!drawing) {
            return;
        }
        drawLine(current.x, current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, color, true);
        current.x = e.clientX || e.touches[0].clientX;
        current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseUp = (e) => {
        if (!drawing) {
            return;
        }
        drawing = false;
        drawLine(current.x, current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, color, true);
    };

    // ----------- limit the number of events per second -----------------------

    const throttle = (callback, delay) => {
        let previousCall = new Date().getTime();
        return function() {
            const time = new Date().getTime();

            if ((time - previousCall) >= delay) {
                previousCall = time;
                callback.apply(null, arguments);
            }
        };
    };

    // -------------- make the canvas fill its parent component -----------------

    const onResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };


    // ----------------------- socket.io connection ----------------------------
    const onDrawingEvent = (data) => {
        const w = canvas.width;
        const h = canvas.height;
        drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    };
    useEffect(() => {
        canvas = canvasRef.current;
        context = canvas.get = canvas.getContext('2d');
        // -----------------add event listeners to our canvas ----------------------

        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mouseout', onMouseUp, false);
        canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);

        // Touch support for mobile devices
        canvas.addEventListener('touchstart', onMouseDown, false);
        canvas.addEventListener('touchend', onMouseUp, false);
        canvas.addEventListener('touchcancel', onMouseUp, false);
        canvas.addEventListener('touchmove', throttle(onMouseMove, 10), false);
        window.addEventListener('resize', onResize, false);
        onResize();
        // socketRef.current = io.connect('localhost:8080');
        // socketRef.current.on('drawing', onDrawingEvent);
        // socketRef.current.emit('drawing', 'test');
        const base_image = new Image();
        base_image.src = 'https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-9/163416935_1935251079979317_3410930274885236009_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=1mrS_9XMq98AX_dvnKF&_nc_ht=scontent.fkhh1-1.fna&oh=bf5ab095d0a35e3e3aed881b26f78578&oe=6089A647';
        base_image.onload = function() {
            context.drawImage(base_image, 0, 0);
        };
    }, []);
    const onColorUpdate = (e) => {
        setColor(e.target.value);
    };
    // ------------- The Canvas and color elements --------------------------
    console.log('color', color);
    return (
        <MyBoard>
            <select value={color} onChange={onColorUpdate}>
                <option value='black'>Black</option>
                <option value='blue'>Blue</option>
                <option value='yellow'>Yellow</option>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
            </select>
            <canvas ref={canvasRef} className='whiteboard' />
        </MyBoard>
    );
};

export default Board;
