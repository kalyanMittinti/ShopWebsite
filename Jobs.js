function populateFeaturedJobs(jobs) {
    const featuredJobsContainer = document.getElementById('featured-jobs-container');
    featuredJobsContainer.innerHTML = '';

    jobs.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job-listing');
        jobListing.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <p>Description: ${job.description}</p>
        `;
        featuredJobsContainer.appendChild(jobListing);
    });
}
document.getElementById("node1").textContent = "Start";
    document.getElementById("node2").textContent = "Stage 1";
    document.getElementById("node3").textContent = "Stage 2";
    document.getElementById("node4").textContent = "End";

// Initial population of job listings
populateFeaturedJobs(featuredJobsData);

// Function to handle form submission for filtering
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();

    const filteredJobs = featuredJobsData.filter(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        return jobTitle.includes(keyword) && jobLocation.includes(location);
    });

    populateFeaturedJobs(filteredJobs);
});
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the keyword and location values from the form
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();
    const location = document.getElementById('location').value.trim().toLowerCase();
    
    // Validate that both keyword and location are not empty
    if (keyword === '' && location === '') {
        alert('Please enter a keyword or location to filter jobs.');
        return;
    }
    
    // Filter the jobs based on keyword and location
    const filteredJobs = featuredJobsData.filter(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        return jobTitle.includes(keyword) && jobLocation.includes(location);
    });
    
    // Populate the featured jobs container with the filtered jobs
    populateFeaturedJobs(filteredJobs);
    
    // Clear the filter fields after submission
    document.getElementById('keyword').value = '';
    document.getElementById('location').value = '';
});
// Function to handle form submission for filtering
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the keyword and location values from the form
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();
    const location = document.getElementById('location').value.trim().toLowerCase();

    // Filter the jobs based on keyword and location
    const filteredJobs = featuredJobsData.filter(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        return jobTitle.includes(keyword) && jobLocation.includes(location);
    });

    // Populate the featured jobs container with filtered jobs
    populateFeaturedJobs(filteredJobs);
});

//
// JavaScript code to handle form submission for filtering job listings

document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the keyword and location values from the form input fields
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();
    const location = document.getElementById('location').value.trim().toLowerCase();

    // Filter the job listings based on the entered keyword and location
    const filteredJobs = featuredJobsData.filter(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        return jobTitle.includes(keyword) && jobLocation.includes(location);
    });

    // Clear the previously displayed job listings
    const featuredJobsContainer = document.getElementById('featured-jobs');
    featuredJobsContainer.innerHTML = '';

    // Display the filtered job listings
    filteredJobs.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job-listing');
        jobListing.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <p>Description: ${job.description}</p>
        `;
        featuredJobsContainer.appendChild(jobListing);
    });

    // Optional: Scroll to the top of the job listings section after filtering
    window.scrollTo({ top: featuredJobsContainer.offsetTop, behavior: 'smooth' });
});

// Function to clear the filter and display all job listings
document.getElementById('clear-filter-btn').addEventListener('click', function() {
    document.getElementById('keyword').value = ''; // Clear the keyword input field
    document.getElementById('location').value = ''; // Clear the location input field
    populateFeaturedJobs(featuredJobsData); // Display all job listings
});
// Function to populate job listings based on provided data
function populateJobListings(jobs) {
    const jobListingsContainer = document.getElementById('featured-jobs');
    jobListingsContainer.innerHTML = '';

    jobs.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job-listing');
        jobListing.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <p>Description: ${job.description}</p>
        `;
        jobListingsContainer.appendChild(jobListing);
    });
}

// Function to filter job listings based on keyword and location
function filterJobListings(keyword, location) {
    const filteredJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        return jobTitle.includes(keyword) && jobLocation.includes(location);
    });

    return filteredJobs;
}

// Function to handle form submission for filtering job listings
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value.trim().toLowerCase();
    const location = document.getElementById('location').value.trim().toLowerCase();

    const filteredJobs = filterJobListings(keyword, location);
    populateJobListings(filteredJobs);
});

// Initially populate job listings when the page loads
populateJobListings(allJobs); // Replace 'allJobs' with your data array
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const submitButton = contactForm.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        alert("Form submitted successfully!"); // Display success message
        contactForm.reset(); // Reset the form
    });
});
// Sample data for the flowchart
// const data = {
//     nodes: [
//         { id: 'A', name: 'Start' },
//         { id: 'B', name: 'Process 1' },
//         { id: 'C', name: 'Process 2' },
//         { id: 'D', name: 'End' }
//     ],
//     links: [
//         { source: 'A', target: 'B' },
//         { source: 'B', target: 'C' },
//         { source: 'C', target: 'D' }
//     ]
// };

// Create SVG container
// const svg = d3.select('#chart-container')
//     .append('svg')
//     .attr('width', 600)
//     .attr('height', 400);

// Create links
// svg.selectAll('line')
//     .data(data.links)
//     .enter()
//     .append('line')
//     .attr('x1', d => getNodePosition(d.source).x)
//     .attr('y1', d => getNodePosition(d.source).y)
//     .attr('x2', d => getNodePosition(d.target).x)
//     .attr('y2', d => getNodePosition(d.target).y)
//     .attr('stroke', 'black');

// // Create nodes
// svg.selectAll('circle')
//     .data(data.nodes)
//     .enter()
//     .append('circle')
//     .attr('cx', d => getNodePosition(d.id).x)
//     .attr('cy', d => getNodePosition(d.id).y)
//     .attr('r', 20)
//     .attr('fill', 'lightblue');

// // Add labels to nodes
// svg.selectAll('text')
//     .data(data.nodes)
//     .enter()
//     .append('text')
//     .attr('x', d => getNodePosition(d.id).x)
//     .attr('y', d => getNodePosition(d.id).y)
//     .attr('dy', '0.35em')
//     .attr('text-anchor', 'middle')
//     .attr('fill', 'black')
//     .text(d => d.name);

// // Function to get node position
// function getNodePosition(nodeId) {
//     const index = data.nodes.findIndex(node => node.id === nodeId);
//     return { x: 100 + index * 150, y: 200 };
// }
