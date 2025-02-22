<?php
/**
 * File containing the Sensei_Block_View_Results class.
 *
 * @package sensei
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block for View Results button.
 */
class Sensei_Block_View_Results {

	/**
	 * Sensei_Block_View_Results constructor.
	 */
	public function __construct() {
		$this->register_block();
	}

	/**
	 * Register View Results button block.
	 *
	 * @access private
	 */
	public function register_block() {
		Sensei_Blocks::register_sensei_block(
			'sensei-lms/button-view-results',
			[
				'render_callback' => [ $this, 'render' ],
			]
		);
	}

	/**
	 * Render the View Results button.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block HTML.
	 *
	 * @return string The HTML of the block.
	 */
	public function render( $attributes, $content ): string {
		$course_id = get_the_ID();

		if ( 'course' !== get_post_type( $course_id ) ) {
			return '';
		}

		/**
		 * Whether to render the View Results block.
		 *
		 * @since 3.13.3
		 *
		 * @param {boolean} $render     Whether to render the View Results block.
		 * @param {array}   $attributes Block attributes.
		 * @param {string}  $content    Block HTML.
		 *
		 * @return {boolean} Whether to render the View Results block.
		 */
		$render = apply_filters(
			'sensei_render_view_results_block',
			Sensei_Utils::user_completed_course( $course_id, get_current_user_id() ),
			$attributes,
			$content
		);

		if ( ! $render ) {
			return '';
		}

		$results_link = Sensei_Course::get_view_results_link( $course_id );

		parse_str( (string) wp_parse_url( $results_link, PHP_URL_QUERY ), $results_link_query_params );

		$form_inputs = '';
		foreach ( $results_link_query_params as $name => $value ) {
			$form_inputs .= '<input type="hidden" name="' . esc_attr( $name ) . '" value="' . esc_attr( $value ) . '">';
		}

		return '<form method="get" action="' . esc_url( $results_link ) . '" class="sensei-block-wrapper sensei-cta">' .
			$form_inputs .
			preg_replace(
				'/<a(.*)>/',
				'<button type="submit" $1>',
				$content,
				1
			) .
		'</form>';
	}
}
