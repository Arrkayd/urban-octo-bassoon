function skillsMember() {
    let member = document.querySelector('.member');
    let memberSkills = document.querySelector('.member__skills');
    let memberSkillsClose = document.querySelector('.member__skills-close');

    member.addEventListener('click', function() {
        memberSkills.classList.toggle('member__skills--active');
    });

    memberSkillsClose.addEventListener('click', function() {
        memberSkills.classList.remove('member__skills--active');
    });
}