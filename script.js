const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all the price elements
  const prices = document.querySelectorAll(".price");
  
  // Calculate the total sum
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new row to display the total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Set the cell content and span it across both columns
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = "bold"; // Optional styling

  // Append the cell to the row, and the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // Disable button to prevent adding multiple total rows
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
