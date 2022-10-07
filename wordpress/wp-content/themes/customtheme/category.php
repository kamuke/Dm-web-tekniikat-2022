<?php get_header(); ?>

<div class="container-lg py-3">
    <main>
        <div class="row">
            <h1 class="fw-semibold"><?php single_cat_title(); ?></h1>
        </div>
        <?php
            if (have_posts()):
                while (have_posts()):
                    the_post();
        ?>
        <article class="row py-2">
                    <?php
                        if (has_post_thumbnail()):
                    ?>
                    <div class="col-lg-5">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                    <div class="col-lg-7 pt-3 pt-lg-0">
                        <h2 class="fw-semibold"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h1>
                        <?php the_content(); ?>
                    </div>
                    <?php
                        else:
                    ?>
                    <h2 class="fw-semibold"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h1>
                    <?php the_content(); ?>
                    <?php
                        endif;
                    ?>
        </article>
        <?php
                endwhile;
            endif;
        ?>
    </main>
</div>

<?php get_footer(); ?>