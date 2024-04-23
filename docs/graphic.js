/* 
	I've created a function here that is a simple d3 chart.
	This could be anthing that has discrete steps, as simple as changing
	the background color, or playing/pausing a video.
	The important part is that it exposes and update function that
	calls a new thing on a scroll trigger.
*/
window.createGraphic = function(graphicSelector) {
	var graphicEl = d3.select('.graphic')
	var graphicVisEl = graphicEl.select('.graphic__vis')
	var graphicProseEl = graphicEl.select('.graphic__prose')

	var margin = 20
	var size = 400
	var chartSize = size - margin * 2
	var scaleX = null
	var scaleR = null
	var data = [8, 6, 7, 5, 3, 0, 9]
	var extent = d3.extent(data)
	var minR = 10
	var maxR = 24
	
	// actions to take on each step of our scroll-driven story
	var steps = [
		function step0() {
			// circles are centered and small
			var t = d3.transition()
				.duration(800)
				.ease(d3.easeQuadInOut)
			    

			var item = graphicVisEl.selectAll('.item')
			
			item.transition(t)
				.attr('transform', translate(chartSize / 2, chartSize / 2))

			item.select('circle')
				.transition(t)
				.attr('r', minR)

			item.select('text')
				.transition(t)
				.style('opacity', 0)
		},

		function step1() {
			var t = d3.transition()
				.duration(800)
				.ease(d3.easeQuadInOut)
			
			// circles are positioned
			var item = graphicVisEl.selectAll('.item')
			
			item.transition(t)
				.attr('transform', function(d, i) {
					return translate(scaleX(i), chartSize / 2)
				})

			item.select('circle')
				.transition(t)
				.attr('r', minR)

			item.select('text')
				.transition(t)
				.style('opacity', 0)
		},

		function step2() {
			var t = d3.transition()
				.duration(800)
				.ease(d3.easeQuadInOut)
			// circles are sized
			var item = graphicVisEl.selectAll('.item')
			item.select('circle')
				.transition(t)
				.delay(function(d, i) { return i * 200 })
				.attr('r', function(d, i) {
					return scaleR(d)
				})
			item.select('text')
				.transition(t)
				.delay(function(d, i) { return i * 200 })
				.style('opacity', 1)
		},
		// Step 3
		function step3() {
			// remove the svg element from the graphic_vis element
			graphicVisEl.selectAll('svg').remove()
			// check whether the iframe element is already created
			iframe = graphicVisEl.select('iframe').node()
			// if the iframe element is not created, create it
			if (!iframe) {
				// Create a iframe element and append it to graphic_vis
				iframe = graphicVisEl.append('iframe')
					.attr('width', size + 'px')
					.attr('height', size + 'px')
					.attr('src', './sections/airbnb.html')
			}
			iframe.src = './sections/airbnb.html'
		},

		// Step 4
		function step4() {
			// get the iframe element
			iframe = graphicVisEl.select('iframe').node()
			// set the src attribute of the iframe element to the airbnb.html
			iframe.src = ''
		}
	]

	// update our chart
	function update(step) {
		steps[step].call()
	}
	
	// little helper for string concat if using es5
	function translate(x, y) {
		return 'translate(' + x + ',' + y + ')'
	}

	function setupCharts() {
		var svg = graphicVisEl.append('svg')
			.attr('width', size + 'px')
			.attr('height', size + 'px')
		
		var chart = svg.append('g')
			.classed('chart', true)
			.attr('transform', 'translate(' + margin + ',' + margin + ')')

		scaleR = d3.scaleLinear()
		scaleX = d3.scaleBand()

		var domainX = d3.range(data.length)

		scaleX
			.domain(domainX)
			.range([0, chartSize])
			.padding(1)

		scaleR
			.domain(extent)
			.range([minR, maxR])

		var item = chart.selectAll('.item')
			.data(data)
			.enter().append('g')
				.classed('item', true)
				.attr('transform', translate(chartSize / 2, chartSize / 2))
		
		item.append('circle')
			.attr('cx', 0)
			.attr('cy', 0)

		item.append('text')
			.text(function(d) { return d })
			.attr('y', 1)
			.style('opacity', 0)
	}

	function setupProse() {
		var height = window.innerHeight * 0.5
		graphicProseEl.selectAll('.trigger')
			.style('height', height + 'px')
	}

	function init() {
		setupCharts()
		setupProse()
		update(0)
	}
	
	init()
	
	return {
		update: update,
	}
}