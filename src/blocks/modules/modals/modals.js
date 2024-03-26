
window.addEventListener('DOMContentLoaded', () => {
	//Catalog Show
	let catalogModalShow = document.querySelectorAll('.js-catalog-modal--show');
	Array.from(catalogModalShow).forEach(item => {
		item.addEventListener('click', (e) => {
			document.querySelector('body').style.overflowY = 'hidden';

			let modal = document.querySelector('.js-catalog-modal');
			modal.classList.add("active");			
		});
	});

	//Catalog Close
	let catalogModalClose = document.querySelector('.js-catalog-modal--close');
	if( catalogModalClose )
		catalogModalClose.addEventListener('click', (e) => {
			document.querySelector('body').style.overflowY = '';

			let modal = document.querySelector('.js-catalog-modal');
			let allActive = modal.querySelectorAll('.active');
			let mobileSections = modal.querySelectorAll('.hide');
			if( mobileSections )
				mobileSections.forEach(e => e.classList.remove('hide'));

			modal.classList.remove("active");
			allActive.forEach(e => e.classList.remove("active"));
		});


	//Catalog Sections
	let catalogModalSection = document.querySelectorAll('.js-catalog-modal--section');
	Array.from(catalogModalSection).forEach(item => {
		item.addEventListener('mouseenter', (e) => {

			let target = e.target;
			let modalContainer = target.closest('.js-catalog-modal');
			let detailWrapper = modalContainer.querySelector('.modal-menu__details');
			let itemsWrapper = modalContainer.querySelector('.modal-menu__items');

			//Button and section Active
			while (target.nodeName !== "BUTTON" && e.target.parentNode !== null) target = e.target.parentNode;

			let activeSection = document.querySelector('.js-catalog-modal--section.active');
			if( activeSection )
				activeSection.classList.remove("active");

			target.classList.add("active");
			

			//Items Show
			let sectionsContainer = target.closest('.modal-menu__sections');
			if( !sectionsContainer.classList.contains("active") )
				sectionsContainer.classList.add("active");

			let sectionId = parseInt(target.dataset.section);
			let sectionContainer = false;
			

			if( sectionId )
				sectionContainer = modalContainer.querySelector('.js-catalog-modal--items[data-section-items="' + sectionId + '"]');

			if( sectionContainer ){

				let activeItems = modalContainer.querySelector('.js-catalog-modal--items.active');
				if( activeItems )
					activeItems.classList.remove("active");

				itemsWrapper.classList.add("active");
				sectionContainer.classList.add("active");

			} else {

				let activeItem = modalContainer.querySelector('.js-catalog-modal--item.active');
				if( activeItem )
					activeItem.classList.remove("active");

				itemsWrapper.classList.remove("active");
				detailWrapper.classList.remove("active");
			}
			
		});
	});

	//Catalog Mobile Sections
	let catalogMobileModalSection = document.querySelectorAll('.js-catalog-mobile--section');
	Array.from(catalogMobileModalSection).forEach(item => {
		item.addEventListener('click', (e) => {
			let target = e.target;
			let modalContainer = target.closest('.js-catalog-modal');
			let mobileSections = modalContainer.querySelector('.js-catalog-mobile--sections');

			//Button and section Active
			while (target.nodeName !== "BUTTON" && e.target.parentNode !== null) target = e.target.parentNode;

			let sectionId = parseInt(target.dataset.section);	
			let activeProducts = modalContainer.querySelector('.js-catalog-mobile--products.active');
			if( activeProducts )
				activeProducts.classList.remove("active");		

			if( sectionId )
				productsContainer = modalContainer.querySelector('.js-catalog-mobile--products[data-products="' + sectionId + '"]');

			if( productsContainer ){

				mobileSections.classList.add("hide");
				productsContainer.classList.add("active");
			}
		});
	});

	
	//Catalog Mobile Sections Back
	let catalogMobileBack = document.querySelectorAll('.js-catalog-mobile--back');
	Array.from(catalogMobileBack).forEach(item => {
		item.addEventListener('click', (e) => {
			let target = e.target;
			let modalContainer = target.closest('.js-catalog-modal');
			let mobileSections = modalContainer.querySelector('.js-catalog-mobile--sections');	
			let activeProducts = modalContainer.querySelector('.js-catalog-mobile--products.active');

			if( activeProducts )
				activeProducts.classList.remove("active");		

			mobileSections.classList.remove("hide");
		});
	});


	//Catalog Item
	let catalogModalItem = document.querySelectorAll('.js-catalog-modal--item');
	Array.from(catalogModalItem).forEach(item => {
		item.addEventListener('mouseenter', (e) => {
			let target = e.target;
			let modalContainer = target.closest('.js-catalog-modal');
			let detailWrapper = modalContainer.querySelector('.modal-menu__details');
			

			//Button and detail Active
			while (target.nodeName !== "BUTTON" && e.target.parentNode !== null) target = e.target.parentNode;

			let activeItem = modalContainer.querySelector('.js-catalog-modal--item.active');
			if( activeItem )
				activeItem.classList.remove("active");

			target.classList.add("active");


			//Detail Show
			let detailId = parseInt(target.dataset.product);
			let detailContainer = false;
			

			if( detailId )
				detailContainer = modalContainer.querySelector('.js-catalog-modal--detail[data-product-detail="' + detailId + '"]');

			if( detailContainer ){

				let activeDetail = modalContainer.querySelector('.js-catalog-modal--detail.active');
				if( activeDetail )
					activeDetail.classList.remove("active");

				detailWrapper.classList.add("active");
				detailContainer.classList.add("active");
			} else {
				detailWrapper.classList.remove("active");
			}
		});
	});


	//Brands Show
	let brandsModalShow = document.querySelectorAll('.js-brands-modal--show');
	Array.from(brandsModalShow).forEach(item => {
		item.addEventListener('click', (e) => {
			document.querySelector('body').style.overflowY = 'hidden';
			let modal = document.querySelector('.js-brands-modal');
			modal.classList.add("active");
		});
	});

	//Brands Close
	let brandsModalClose = document.querySelector('.js-brands-modal--close');
	if( brandsModalClose )
		brandsModalClose.addEventListener('click', (e) => {
			document.querySelector('body').style.overflowY = '';
			
			let modal = document.querySelector('.js-brands-modal');
			let allActive = modal.querySelectorAll('.active');
			let mobileSections = modal.querySelectorAll('.hide');
			if( mobileSections )
				mobileSections.forEach(e => e.classList.remove('hide'));

			modal.classList.remove("active");
			allActive.forEach(e => e.classList.remove("active"));
		});


	//Brands Item
	let brandsModalItem = document.querySelectorAll('.js-brands-modal--section');
	Array.from(brandsModalItem).forEach(item => {
		item.addEventListener('mouseenter', (e) => {
			let target = e.target;
			let modalContainer = target.closest('.js-brands-modal');
			let itemsWrapper = modalContainer.querySelector('.modal-menu__items');
			let detailWrapper = modalContainer.querySelector('.modal-menu__details');
			

			//Button Active
			while (target.nodeName !== "BUTTON" && e.target.parentNode !== null) target = e.target.parentNode;

			let activeItem = modalContainer.querySelector('.js-brands-modal--section.active');
			if( activeItem )
				activeItem.classList.remove("active");

			target.classList.add("active");

			//Items Show
			let sectionsContainer = target.closest('.modal-menu__sections');
			if( !sectionsContainer.classList.contains("active") )
				sectionsContainer.classList.add("active");

			let sectionId = parseInt(target.dataset.section);
			let sectionContainer = false;

			if( sectionId )
				sectionContainer = modalContainer.querySelector('.js-brands-modal--items[data-section-items="' + sectionId + '"]');

			if( sectionContainer ){

				let activeSection = modalContainer.querySelector('.js-brands-modal--items.active');
				if( activeSection )
					activeSection.classList.remove("active");

				itemsWrapper.classList.add("active");
				sectionContainer.classList.add("active");
			} else {
				itemsWrapper.classList.remove("active");
			}


			//Detail Show
			let detailContainer = false;
			if( sectionId )
				detailContainer = modalContainer.querySelector('.js-brands-modal--detail[data-detail="' + sectionId + '"]');

			if( detailContainer ){

				let activeDetail = modalContainer.querySelector('.js-brands-modal--detail.active');
				if( activeDetail )
					activeDetail.classList.remove("active");

				detailWrapper.classList.add("active");
				detailContainer.classList.add("active");
			} else {
				detailWrapper.classList.remove("active");
			}
		});
	});

	//Brands Mobile Sections
	let brandsMobileModalSection = document.querySelectorAll('.js-brands-mobile--section');
	Array.from(brandsMobileModalSection).forEach(item => {
		item.addEventListener('click', (e) => {
			let target = e.target;
			let modalContainer = target.closest('.js-brands-modal');
			let mobileSections = modalContainer.querySelector('.js-brands-mobile--sections');

			//Button and section Active
			while (target.nodeName !== "BUTTON" && e.target.parentNode !== null) target = e.target.parentNode;

			let sectionId = parseInt(target.dataset.section);	
			let activeProducts = modalContainer.querySelector('.js-brands-mobile--products.active');
			if( activeProducts )
				activeProducts.classList.remove("active");		

			if( sectionId )
				productsContainer = modalContainer.querySelector('.js-brands-mobile--products[data-products="' + sectionId + '"]');

			if( productsContainer ){

				mobileSections.classList.add("hide");
				productsContainer.classList.add("active");
			}
		});
	});

	
	//Catalog Mobile Sections Back
	let brandsMobileBack = document.querySelectorAll('.js-brands-mobile--back');
	Array.from(brandsMobileBack).forEach(item => {
		item.addEventListener('click', (e) => {
			let target = e.target;
			let modalContainer = target.closest('.js-brands-modal');
			let mobileSections = modalContainer.querySelector('.js-brands-mobile--sections');	
			let activeProducts = modalContainer.querySelector('.js-brands-mobile--products.active');

			if( activeProducts )
				activeProducts.classList.remove("active");		

			mobileSections.classList.remove("hide");
		});
	});
});
