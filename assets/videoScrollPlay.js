class ScrollPlay {
	constructor(atts){
		let { 
			speed = 1, 
			container = 'container', 
			canvas= 'canvas', 
			video = false, 
			sequence = false, 
			frames = false,
			inertia = 6} = atts;
		this.frameNumber = 1
		this.playbackConst = speed
		this.inertia = inertia
		this.container = container
//		this.canvas = container.querySelector('canvas');
		this.canvas = document.createElement('canvas');
		this.container.appendChild(this.canvas);
		this.vid = container.querySelector('video');
		this.ctx = this.canvas.getContext("2d");
		this.animation = null;
		this.canUpdate = false;
		this.aspectX = this.container.dataset.aspectx || 1920;
		this.aspectY = this.container.dataset.aspecty || 1080;
		this.rootMargin = this.container.dataset.rootmargin || '0px 0px 0px 0px';

		this.loadVideo = this.loadVideo.bind(this)
		this.updatePlayHead = this.updatePlayHead.bind(this)
		this.setupVideo = this.setupVideo.bind(this)

		this.loadVideo();
	}
	
	loadVideo() {
		this.vid.addEventListener('loadedmetadata', this.setupVideo)
		this.canvas.width = this.container.offsetWidth;
		this.canvas.height = this.container.offsetHeight;
		this.vid.style.display = 'none';

		document.onreadystatechange = () => {
			if (document.readyState === 'complete') {
				if (this.vid.readyState >= 2) {
					this.setupVideo();
				}
			}
		}
	}
	
	setupVideo() {
		this.vid.play();
		this.vid.pause();
		this.vid.currentTime = parseFloat(0);
		this.updatePlayHead();
		this.startAnimationFrames();
		
		this.observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.canUpdate = true;
				} else {
					this.canUpdate = false;
				}
			})
		}, {
			rootMargin: this.rootMargin,
			threshold: 0
		});
		this.observer.observe(this.container);
	}
	
	startAnimationFrames() {
		if (this.canUpdate) {
			this.runFrameAnimation();
		}
		window.requestAnimationFrame(() => { this.startAnimationFrames() });
	}
	
	runFrameAnimation() {
		const thisframeNumber  = ((window.pageYOffset - this.container.offsetTop + window.innerHeight)/this.playbackConst).toFixed(1);
		if (thisframeNumber != this.frameNumber) {
			this.frameNumber = thisframeNumber;
			this.animation = window.requestAnimationFrame(this.updatePlayHead);
		}
	}

	updatePlayHead() {
		const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
		const step = () => {
			const timestamp = this.vid.currentTime;
			const frame = ((this.frameNumber - timestamp)/this.inertia);
			const time = clamp((timestamp + frame), 0, this.vid.duration);
			this.vid.onseeked = () => {
				this.vid.onseeked = null;
				if (this.frameNumber !== time.toFixed(1) && timestamp != 0) {
					this.animation = window.requestAnimationFrame(step);
				}
			}
			if (typeof this.vid.fastSeek == 'function') {
				this.vid.fastSeek(time);
			}
			this.vid.currentTime = parseFloat(time);
			const scale = Math.max(this.canvas.width / this.aspectX, this.canvas.height / this.aspectY);
			const x = (this.canvas.width / 2) - (this.aspectX / 2) * scale;
			const y = (this.canvas.height / 2) - (this.aspectY / 2) * scale;

			this.ctx.drawImage(this.vid, x, y, this.aspectX * scale, this.aspectY * scale);
		}

		this.animation = window.requestAnimationFrame(step);
	}
}
