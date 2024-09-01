const vacationRequests = [
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 3"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Employee 3 Name</h5>
            <p class="card-text">Submitted on: 3/8/2024</p>
            <p class="card-text">Duration: 3 Weeks (1/4/2023 - 21/4/2023)</p>
            <p class="card-text">Salary: 1200 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 2"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Employee 2 Name</h5>
            <p class="card-text">Submitted on: 2/5/2024</p>
            <p class="card-text">Duration: 1 Week (1/4/2023 - 7/4/2023)</p>
            <p class="card-text">Salary: 800 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 1"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 4"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 5"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 6"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 7"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 7"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 7"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,
    `
    <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle" alt="Employee 7"  style="width: 50px; height: 50px;">
        <div class="card-body">
            <h5 class="card-title">Ahmad Attar</h5>
            <p class="card-text">Submitted on: 1/3/2024</p>
            <p class="card-text">Duration: 2 Weeks (1/4/2023 - 14/4/2023)</p>
            <p class="card-text">Salary: 1000 AED</p>
            <button type="button" class="btn btn-danger">Decline</button>
            <button type="button" class="btn btn-success">Approve</button>
        </div>
    </div>
    `,



];


function displayTheFirstThreeElems() {
    const vacationRequestsContainer = document.getElementById('vacation-requests-container');
    console.log(vacationRequestsContainer); 
    for (let i = 0; i < 3 && i < vacationRequests.length; i++) {
      const tempDiv = document.createElement('div');
      tempDiv.className = 'col-md-3 mb-2 parent';
      tempDiv.innerHTML = vacationRequests[i];
      vacationRequestsContainer.append(tempDiv);
    }




}

window.onload = function() {
    const currentPage = window.location.pathname;

    if(currentPage.includes('home.html')) {
        displayTheFirstThreeElems();
    }
    if(currentPage.includes('vacation-requests.html')) {
        loadNavbar();
        displayAllVacationRequestsElems(1);
        
    }
}


const itemsPerPage = 6; // Number of cards per page
let currentPage = 1;
function displayAllVacationRequestsElems(page) {
    const container = document.getElementById('vacation-requests-container');
    container.innerHTML = ''; // Clear previous content

    const selectAllCheckbox = document.getElementById('select-all');
    selectAllCheckbox.checked = false;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    console.log(start + "" + end );
    const requestsToDisplay = vacationRequests.slice(start, end);
    console.log(requestsToDisplay);

    requestsToDisplay.forEach(request => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3 parent';
        console.log(request);
        card.innerHTML = request;

        container.appendChild(card);
    });
}

document.querySelectorAll('.pagination .page-link').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        console.log(link, index);
        e.preventDefault();
        currentPage = index + 1;
        displayAllVacationRequestsElems(currentPage);
    });
});





function searchVacationRequests(emplyeeName){
    let vacationRequestsContainer = document.getElementById('vacation-requests-container');
    let titles = vacationRequestsContainer.querySelectorAll('.card-title');
    if(titles.length <= 1){
        console.log(titles);
        displayTheFirstThreeElems();
        vacationRequestsContainer = document.getElementById('vacation-requests-container');
        titles = vacationRequestsContainer.querySelectorAll('.card-title');
    }
  titles.forEach(request => {
      if(request.innerHTML !== emplyeeName) {
          console.log(request.closest('.card'));
        //   vacationRequestsContainer.innerHTML = '';
          vacationRequestsContainer.removeChild(request.closest('.parent'));
        //   break;
    }

  });


}
function onClickVacationRequestsButton() {
    // console.log('baraa');
    const employeeName = document.getElementById('searchInput').value;
    searchVacationRequests(employeeName);
  };

  function navigateToPage() {
    window.location.href = 'vacation-requests.html'; // Change 'another-page.html' to your target page
  }
  
  // Add event listener to the button
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('viewMoreButton');
    if (button) {
      button.addEventListener('click', navigateToPage);
    }
  });



  function loadNavbar() {
    // Fetch the navbar HTML
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            console.log(data)
            // Inject the navbar into the page
            document.getElementById('navbar-container').innerHTML = data;
            // setActiveNav(); // Call function to set the active link
        });
}



function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('select-all');
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (selectAllCheckbox.checked) {
            card.classList.add('border-5');
        } else {
            card.classList.remove('border-5');
        }
    });
}
