function domainName(url){
  //your code here
  url = /http/.test(url)? url: 'http://'+url
  url = new URL(url)
  hostname =  /www/.test(url.hostname)? url.hostname.split(".")[1]:url.host.split(".")[0]
  return hostname
}



