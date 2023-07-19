export function formatEthAddress(address) {
    // Check if the address is falsy
    if (!address) {
        return "";
    }
    // Remove any leading or trailing spaces
    address = address.trim();
  
    // Check if the address is already formatted with "0x" prefix
    if (address.startsWith("0x")) {
      address = address.slice(2); // Remove the "0x" prefix
    }
  
    // Convert the address to lowercase
    address = address.toLowerCase();
  
    // Check if the address has at least 4 characters
    if (address.length >= 4) {
      // Take the first 4 characters and the last 4 characters of the address
      address = address.slice(0, 4) + "..." + address.slice(-4);
    }
  
    // Add the "0x" prefix
    address = "0x" + address;
  
    return address;
  }
  