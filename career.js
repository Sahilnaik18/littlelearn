function filterCareers() {
    const industry = document.getElementById('industry').value;
    const level = document.getElementById('level').value;
    const careers = document.querySelectorAll('.career-card');

    careers.forEach(card => {
        const cardIndustry = card.getAttribute('data-industry');
        const cardLevel = card.getAttribute('data-level');
        
        // Check if the career card matches the filters
        const industryMatch = industry === 'all' || cardIndustry === industry;
        const levelMatch = level === 'all' || cardLevel === level;
        
        // Show or hide the career card based on filters
        if (industryMatch && levelMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
