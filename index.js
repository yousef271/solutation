function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // section.focus(); // Uncomment this line if needed
    }
}

function home() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showSchool() {
    scrollToSection('school');
}

function showGames() {
    scrollToSection('Games');
}

function showSocialMedia() {
    scrollToSection('social_media');
}

function showAIChatting() {
    scrollToSection('ai_chatting');
}

function showAIImage() {
    scrollToSection('ai_image');
}

function showOtherAI() {
    scrollToSection('other_ai');
}

function showMovies() {
    scrollToSection('movies');
}