<?php 
get_header();
?>

<section class="container-lg">
    <img src="<?php header_image(); ?>" height="<?php echo get_custom_header()->height; ?>" width="<?php echo get_custom_header()->width; ?>" alt="Banner image">
</section>

<div class="container-lg">
    <div class="row">
        <main class="col-9">
            <?php
                    if (have_posts()):
                        while (have_posts()):
                            the_post();
                ?>
                <h1><?php the_title(); ?></h1>
                <article><?php the_content(); ?></article>
                <?php
                    endwhile;
                endif;
                ?>
        </main>
        <?php get_sidebar(); ?>
    </div>
</div>

<?php
get_footer();
?>