@php
    $brandName = filament()->getBrandName();
@endphp

<div class="min-h-screen flex items-center justify-center p-4" style="background: #F5F0E8;"
     x-data
     x-init="
        document.querySelectorAll('.fi-simple-page, .fi-simple-main, .fi-simple-ctn').forEach(el => {
            el.style.background = '#F5F0E8';
            el.style.padding = '0';
            el.style.border = '2px solid #E42278';
            el.style.borderRadius = '1.5rem';
            el.style.overflow = 'hidden';
        });
        document.querySelectorAll('.fi-form, .fi-fo-field-wrp, .fi-fo-component-ctn').forEach(el => {
            el.style.background = '#F5F0E8';
            el.style.padding = '0';
        });
        document.querySelectorAll('.fi-input-wrp').forEach(el => {
            el.style.background = 'transparent';
            el.style.borderRadius = '0.75rem';
            el.style.border = '1px solid #d1c7b8';
        });
        document.querySelectorAll('.fi-input-wrp button, .fi-input-wrp .fi-icon-btn, .fi-input-wrp [type=button]').forEach(el => {
            el.style.setProperty('background', 'transparent', 'important');
            el.style.setProperty('background-color', 'transparent', 'important');
            el.style.color = '#6B6760';
        });
        document.querySelectorAll('.fi-fo-field-wrp label').forEach(el => {
            el.style.fontWeight = '600';
            el.style.fontSize = '0.875rem';
            el.style.color = '#000';
            el.style.marginBottom = '0.5rem';
        });
        document.querySelectorAll('.fi-checkbox-label').forEach(el => {
            el.style.fontSize = '0.875rem';
            el.style.color = '#6B6760';
            el.style.position = 'relative';
            el.style.top = '2px';
            el.style.left = '-2px';
        });
        document.querySelectorAll('.fi-form-actions').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.fi-checkbox-input').forEach(el => {
            el.style.accentColor = '#E42278';
        });
     ">
    <div class="w-full max-w-md px-6 py-4">
        {{-- Logo --}}
        <div class="text-center mb-8">
            <h1 class="font-display text-6xl tracking-tight" style="color: #E42278;">MRK</h1>
            <p class="font-body text-sm font-semibold uppercase tracking-[0.25em] mt-2" style="color: #6B6760;">Admin Panel</p>
        </div>

        {{-- Card --}}
        <div>
            <div class="text-center" style="margin-bottom: 40px;">
                <h2 class="font-display text-3xl md:text-4xl tracking-tight text-black">Welcome Back</h2>
                <p class="font-body text-gray-500 mt-2">Sign in to your account</p>
            </div>

            <form wire:submit="authenticate" class="space-y-6">
                {{ $this->form }}

                <button type="submit"
                        class="w-full font-body font-semibold text-base py-4 px-6 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 text-white"
                        style="background: #E42278;"
                        onmouseover="this.style.background='#c91e68';"
                        onmouseout="this.style.background='#E42278';">
                    <span>Sign In</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </button>
            </form>
        </div>

        <p class="text-center mt-6 font-body text-sm" style="color: #6B6760;">
            © {{ date('Y') }} MRK Design Agency
        </p>
    </div>
</div>
