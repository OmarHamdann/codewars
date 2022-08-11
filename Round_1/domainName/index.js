function domainName(url) {
  //your code here
  if (url.includes("www.")) {
    url = url.replace("www.", "");
  }
  if (url.includes("http://")) {
    url = url.replace("http://", "");
  }
  if (url.includes("https://")) {
    url = url.replace("https://", "");
  }
  if (url.includes(".")) {
    url = url.split(".")[0];
  }

  return url;
}

console.log(domainName("http://www.google.com")); // google
console.log(domainName("http://github.com/carbonfive/raygun")); // github
