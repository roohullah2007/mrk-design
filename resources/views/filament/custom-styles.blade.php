<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
    /* MRK Design Agency - Admin Panel Theme */

    /* Custom font classes */
    .font-display { font-family: 'Bricolage Grotesque', sans-serif !important; }
    .font-body { font-family: 'Inter Tight', sans-serif !important; }

    /* Apply Inter Tight to all admin panel text */
    .fi-sidebar,
    .fi-topbar,
    .fi-main,
    .fi-body,
    body {
        font-family: 'Inter Tight', sans-serif !important;
    }

    /* Override Filament's default gray backgrounds with cream color */
    body.fi-body,
    .fi-body,
    .fi-layout,
    .fi-page,
    .fi-simple-layout,
    .fi-simple-main-ctn {
        background-color: #F5F0E8 !important;
    }

    /* Sidebar styling */
    .fi-sidebar {
        background-color: #fff !important;
        border-right: 1px solid #e5e7eb !important;
    }

    .fi-sidebar-nav-groups {
        padding: 0.5rem !important;
    }

    /* Sidebar navigation items */
    .fi-sidebar-item-button {
        border-radius: 0.75rem !important;
        transition: all 0.2s ease !important;
        font-weight: 500 !important;
    }

    .fi-sidebar-item-button:hover {
        background-color: rgba(228, 34, 120, 0.1) !important;
    }

    .fi-sidebar-item-active .fi-sidebar-item-button {
        background-color: #E42278 !important;
        color: #fff !important;
    }

    .fi-sidebar-item-active .fi-sidebar-item-button span,
    .fi-sidebar-item-active .fi-sidebar-item-button .fi-sidebar-item-label,
    .fi-sidebar-item-active .fi-sidebar-item-label {
        color: #fff !important;
    }

    .fi-sidebar-item-active .fi-sidebar-item-button:hover {
        background-color: #c91e68 !important;
    }

    /* Top bar styling */
    .fi-topbar {
        background-color: #fff !important;
        border-bottom: 1px solid #e5e7eb !important;
    }

    /* Main content area */
    .fi-main {
        background-color: #F5F0E8 !important;
    }

    /* Card/Section styling */
    .fi-section {
        border-radius: 1rem !important;
        border: 1px solid #e5e7eb !important;
    }

    .fi-section-header {
        background-color: #fff !important;
        border-bottom: 1px solid #e5e7eb !important;
    }

    /* Table styling */
    .fi-ta {
        border-radius: 1rem !important;
        overflow: hidden;
        border: 1px solid #e5e7eb !important;
    }

    .fi-ta-header {
        background-color: #f9fafb !important;
    }

    .fi-ta-row:hover {
        background-color: rgba(228, 34, 120, 0.05) !important;
    }

    /* Button styling */
    .fi-btn-primary {
        background-color: #E42278 !important;
        border-color: #E42278 !important;
    }

    .fi-btn-primary:hover {
        background-color: #c91e68 !important;
        border-color: #c91e68 !important;
    }

    /* Form input styling in admin panel */
    .fi-input-wrp {
        border-radius: 0.75rem !important;
        border: 2px solid #e5e7eb !important;
        transition: all 0.2s ease !important;
    }

    .fi-input-wrp:hover {
        border-color: #d1d5db !important;
    }

    .fi-input-wrp:focus-within {
        border-color: #E42278 !important;
        box-shadow: 0 0 0 3px rgba(228, 34, 120, 0.1) !important;
    }

    /* Stats widget styling */
    .fi-wi-stats-overview-stat {
        border-radius: 1rem !important;
        border: 1px solid #e5e7eb !important;
        transition: all 0.2s ease !important;
    }

    .fi-wi-stats-overview-stat:hover {
        border-color: #E42278 !important;
        box-shadow: 0 4px 12px rgba(228, 34, 120, 0.1) !important;
    }

    /* Badge styling */
    .fi-badge {
        border-radius: 9999px !important;
        font-weight: 600 !important;
    }

    /* Notification styling */
    .fi-notification {
        border-radius: 1rem !important;
        border: 1px solid #e5e7eb !important;
    }

    /* Modal styling */
    .fi-modal-content {
        border-radius: 1.5rem !important;
    }

    /* Fix modal close button clickability */
    .fi-modal-close-btn,
    .fi-modal-header-actions,
    .fi-modal button[type="button"],
    .fi-btn {
        position: relative;
        z-index: 10;
    }

    .fi-modal-window {
        z-index: 50 !important;
    }

    .fi-modal-close-btn {
        pointer-events: auto !important;
    }

    /* Dropdown styling */
    .fi-dropdown-panel {
        border-radius: 0.75rem !important;
        border: 1px solid #e5e7eb !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
    }

    /* Checkbox and radio styling */
    .fi-checkbox-input:checked,
    .fi-radio-input:checked {
        background-color: #E42278 !important;
        border-color: #E42278 !important;
    }

    /* Select/Dropdown input */
    .fi-select-input {
        border-radius: 0.75rem !important;
    }

    /* Pagination styling */
    .fi-pagination-item-button {
        border-radius: 0.5rem !important;
    }

    .fi-pagination-item-button[aria-current="page"] {
        background-color: #E42278 !important;
    }

    /* Link colors */
    a.fi-link {
        color: #E42278 !important;
    }

    a.fi-link:hover {
        color: #c91e68 !important;
    }

    /* Icon colors in active states */
    .fi-sidebar-item-active .fi-sidebar-item-icon {
        color: #fff !important;
    }

    /* Rich editor toolbar */
    .fi-fo-rich-editor .trix-button-group {
        border-radius: 0.5rem !important;
    }

    /* File upload styling */
    .fi-fo-file-upload {
        border-radius: 0.75rem !important;
        border: 2px dashed #e5e7eb !important;
    }

    .fi-fo-file-upload:hover {
        border-color: #E42278 !important;
        background-color: rgba(228, 34, 120, 0.05) !important;
    }

    /* Tab navigation */
    .fi-tabs-nav {
        border-bottom: 2px solid #e5e7eb !important;
    }

    .fi-tabs-item-button[aria-selected="true"] {
        border-bottom-color: #E42278 !important;
        color: #E42278 !important;
    }

    /* Header breadcrumb */
    .fi-breadcrumbs {
        font-family: 'Inter Tight', sans-serif !important;
    }

    /* Page header */
    .fi-header-heading {
        font-family: 'Bricolage Grotesque', sans-serif !important;
        font-weight: 800 !important;
    }

    /* Brand logo in sidebar */
    .fi-logo {
        padding: 0.5rem 0 !important;
    }

    /* Sidebar group labels */
    .fi-sidebar-group-label {
        font-family: 'Inter Tight', sans-serif !important;
        font-weight: 600 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        font-size: 0.75rem !important;
        color: #6B6760 !important;
    }

    /* User menu styling */
    .fi-user-menu-button {
        border-radius: 9999px !important;
        transition: all 0.2s ease !important;
    }

    .fi-user-menu-button:hover {
        background-color: rgba(228, 34, 120, 0.1) !important;
    }

    /* Avatar styling */
    .fi-avatar {
        border: 2px solid #E42278 !important;
    }

    /* Actions buttons */
    .fi-ac-btn-action {
        border-radius: 0.75rem !important;
    }

    /* Create button */
    .fi-btn[wire\\:click*="create"],
    .fi-ta-ctn > .fi-ta-header-ctn button[type="button"] {
        background-color: #E42278 !important;
        border-color: #E42278 !important;
        border-radius: 9999px !important;
        font-weight: 600 !important;
    }

    .fi-btn[wire\\:click*="create"]:hover,
    .fi-ta-ctn > .fi-ta-header-ctn button[type="button"]:hover {
        background-color: #c91e68 !important;
        border-color: #c91e68 !important;
    }

    /* Simple page header */
    .fi-simple-header {
        text-align: center !important;
    }

    /* Global search styling */
    .fi-global-search-input {
        border-radius: 9999px !important;
        border: 2px solid #e5e7eb !important;
    }

    .fi-global-search-input:focus {
        border-color: #E42278 !important;
        box-shadow: 0 0 0 3px rgba(228, 34, 120, 0.1) !important;
    }

    /* Sidebar navigation badge (unread count) */
    .fi-sidebar-item .fi-badge,
    .fi-sidebar-item .fi-badge span,
    .fi-sidebar-nav .fi-badge,
    .fi-sidebar .fi-badge,
    .fi-badge.fi-color-primary {
        color: #000 !important;
    }

</style>
