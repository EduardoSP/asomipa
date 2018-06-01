<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
	  <?php $wl_theme_options = weblizar_get_options(); 
$wl_theme_options['slider_image_speed'];
	  if($wl_theme_options['slider_image_speed']!='')
	{
		
	echo '<script type="text/javascript">
		jQuery(document ).ready(function( $ ) {
		jQuery("#myCarousel" ).carousel({
			interval:'.$wl_theme_options['slider_image_speed'].'
			
		    });
	   });
	</script>';
	 
	} 
	//--push array new data for the images
	$new_data = array(
		'slide_image_4'  	=> 'http://www.asomipa.org/wp-content/uploads/2018/05/rsz_panoramica2_2.jpg',
		'slide_title_4'  	=> 'aa',
		'slide_desc_4'	 	=> 'ad',
		'slide_desc_4'	 	=> '',
		'slide_btn_text_4' 	=> 'dd',
		'slide_btn_link_4'	=> 'https://www.google.com.co/',
		'slide_image_5'  	=> 'http://www.asomipa.org/wp-content/uploads/2018/05/rsz_image019.jpg',
		'slide_title_5'  	=> '',
		'slide_desc_5'	 	=> '',
		'slide_desc_5'	 	=> '',
		'slide_btn_text_5' 	=> '',
		'slide_btn_link_5'	=> ''

	);
	$wl_theme_options = array_merge($wl_theme_options, $new_data);
	//------------------------------------

	  $j=1;
			for($i=1; $i<=5; $i++){  ?>
			<?php if($wl_theme_options['slide_image_'.$i]!='') { 
              			?>
        <div class="item <?php if($j==1) echo "active"; ?>">
			
          <img src="<?php echo esc_url($wl_theme_options['slide_image_'.$i]); ?>" class="img-responsive" alt="<?php echo esc_attr($wl_theme_options['slide_title_'.$i]); ?>">		  
		  <div class="container">
            <div class="carousel-caption">
			<?php if($wl_theme_options['slide_title_'.$i]!='') {  ?>
			<div class="carousel-text">
			
            <h1 class="animated <?php if($wl_theme_options['canimate_type_title']!='') { echo $wl_theme_options['animate_type_title']; } else echo bounceInRight; ?> head_<?php echo $i ?>"><?php echo esc_attr($wl_theme_options['slide_title_'.$i]); ?></h1>			
			<?php  	
			 if($wl_theme_options['slide_desc_'.$i]!='') {  ?>
			  <ul class="list-unstyled carousel-list">
			 <li class="animated <?php if($wl_theme_options['animate_type_desc']!='') { echo $wl_theme_options['animate_type_desc']; } else echo bounceInLeft; ?> desc_<?php echo $i ?>"><?php echo get_theme_mod('slide_desc_'.$i , $wl_theme_options['slide_desc_'.$i]); ?></li>
			 </ul>
			 <?php }
			if($wl_theme_options['slide_btn_text_'.$i]!='') { ?>
            <a class="enigma_blog_read_btn animated bounceInUp rdm_<?php echo $i ?>" href="<?php if($wl_theme_options['slide_btn_link_'.$i]!='') { echo esc_url($wl_theme_options['slide_btn_link_'.$i]); } ?>" role="button"><?php echo esc_attr($wl_theme_options['slide_btn_text_'.$i]); ?></a>
			<?php } ?>
            </div>
			<?php } ?>
			</div>
          </div>
        </div>	
			<?php $j++; }  } ?>		
      </div>
	  <ol class="carousel-indicators">
			<?php for($i=0; $i<$j-1; $i++) { ?>
			<li data-target="#myCarousel" data-slide-to="<?php echo $i; ?>" <?php if($i==0) { echo 'class="active"'; } ?> ></li>
			<?php } ?>
	</ol>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
	  <div class="enigma_slider_shadow"></div>
    </div><!-- /.carousel -->