window.addEventListener("keydown", e => { 
    let circle = document.getElementById("circle");
    circle.className = '';
    if (e.key === 'ArrowRight') 
        circle.classList.add('moveright');
    if (e.key === 'ArrowLeft') 
        circle.classList.add('moveleft');
    if (e.key === 'ArrowUp')
        circle.classList.add('moveup');
    if (e.key === 'ArrowDown') 
        circle.classList.add('movedown');
});  
