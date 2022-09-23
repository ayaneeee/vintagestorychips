$(function() { 
	$(function() {
		//タイピングアニメーション
		$('.typed').typed({
			strings: ["Thank you for coming my page.","Vintage story clips.","Hope you enjoy here." ],
			typeSpeed: 150,
			startDelay: 1000,
			backSpeed: 20,
			loop: true,
			loopCount: Infinity,
			showCursor: false,
			backDelay: 500
		});
	});
		// フェードイン　about
		$(function(){
			$(".inview").on("inview", function (event, isInView) {
				if (isInView) {
					$(this).stop().addClass("is-show");
				}
			});
		});

		// form
		const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_v7fj61j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('「送信完了」Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});	
	
 });
	




	

