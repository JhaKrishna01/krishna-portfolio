export function tracker() {
        fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
	const ip=data.ip;
	const agent= navigator.userAgent;
	let msg="IP "+ip+"\nUser agent "+agent+"\nDate "+new Date().toLocaleString()+"\nTitle "+document.title+"\nReferrer "+document.referrer+"\n";
	console.log(msg);

	fetch('https://ipwho.is/'+ip)
	.then(response => response.json())
	.then(data => {

	const msg2=JSON.stringify(data, null, 2);
	msg=msg+"\n"+msg2;
	
	const url='https://api.telegram.org/bot7343260236:AAHk9PIKr0P3cvd2NKF1_03eNDehjVZQwNI/sendMessage?chat_id=5025626318&text='+encodeURI(msg);
	fetch(url).then(console.log("Done"));

	})
    })
    .catch(error => {
        console.log('Error:', error);
    });
    return 'test';
}