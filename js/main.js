function selectJob(event, jobName) {
    let element = document.getElementById(jobName);
    let jobSections = document.getElementsByClassName('job');
    let jobButtons = document.getElementsByClassName('button-job');
    let button = event.currentTarget;

    // Ocultar/Mostrar sección de trabajo
    for (let i = 0; i < jobSections.length; i++) {
        if (!jobSections[i].classList.contains('hidden')) {
            jobSections[i].classList.add('hidden');
            jobSections[i].classList.add('visuallyhidden');
        }
    }
    element.classList.remove('hidden');
    setTimeout(function () {
        element.classList.remove('visuallyhidden');
    }, 20);

    // Deshabilitar/Habilitar botón
    for (let i = 0; i < jobButtons.length; i++) {
        if (jobButtons[i].classList.contains('button-job-selected')) {
            jobButtons[i].classList.remove('button-job-selected');
        }
    }
    button.classList.add('button-job-selected');
}

function showHideMenu(show) {
    if(show) {
        document.getElementById('rigth-menu').style.right = "0%";
    }
    else {
        document.getElementById('rigth-menu').style.right = "";
    }
}