const skillsSection = document.getElementById('skills-section');
const progressbars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressbars.forEach(progressbar=>{
        const value = progressbar.dataset.progress;
      progressbar.style.opacity = 1;
      progressbar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressbars.forEach(p=>{
        p.style.opacity=0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll',()=>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});