import useMediaQuery from './useMediaQuery';

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export default function useBreakpoints() {
	const breakpoints = {
		// isXs: useMediaQuery('(max-width: 380px)'),
		isSm: useMediaQuery(' (max-width: 640px)'),
		isMd: useMediaQuery('(min-width: 645px) and (max-width: 768px)'),
		isLg: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
		isXlg: useMediaQuery('(min-width: 1025px)'),
		// isXxlg: useMediaQuery('(min-width: 1800px)'),

		active: 'xs',
	};
	// if (breakpoints.isXs) breakpoints.active = 'xs';
	if (breakpoints.isSm) breakpoints.active = 'sm';
	if (breakpoints.isMd) breakpoints.active = 'md';
	if (breakpoints.isLg) breakpoints.active = 'lg';
	if (breakpoints.isXlg) breakpoints.active = 'Xlg';
	// if (breakpoints.isXxlg) breakpoints.active = 'Xxlg';
	return breakpoints;
}
