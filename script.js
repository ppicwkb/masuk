        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        function scrollToMenu() {
            document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
        }

        function showInfo() {
            document.getElementById('infoModal').classList.remove('hidden');
            document.getElementById('infoModal').classList.add('flex');
        }

        function closeInfo() {
            document.getElementById('infoModal').classList.add('hidden');
            document.getElementById('infoModal').classList.remove('flex');
        }

        function showOrder() {
            document.getElementById('OrderModal').classList.remove('hidden');
            document.getElementById('OrderModal').classList.add('flex');
        }

        function closeOrder() {
            document.getElementById('OrderModal').classList.add('hidden');
            document.getElementById('OrderModal').classList.remove('flex');
        }

function showwkbkode() {
            document.getElementById('kodeModal').classList.remove('hidden');
            document.getElementById('kodeModal').classList.add('flex');
        }

        function closewkbkode() {
            document.getElementById('kodeModal').classList.add('hidden');
            document.getElementById('kodeModal').classList.remove('flex');
        }





        function showStokOptions() {
            document.getElementById('stokModal').classList.remove('hidden');
            document.getElementById('stokModal').classList.add('flex');
        }

        function closeStokOptions() {
            document.getElementById('stokModal').classList.add('hidden');
            document.getElementById('stokModal').classList.remove('flex');
        }


function showStokOptions1() {
            document.getElementById('stokModal1').classList.remove('hidden');
            document.getElementById('stokModal1').classList.add('flex');
        }

        function closeStokOptions1() {
            document.getElementById('stokModal1').classList.add('hidden');
            document.getElementById('stokModal1').classList.remove('flex');
        }





        function showCSOptions() {
            document.getElementById('CSModal').classList.remove('hidden');
            document.getElementById('CSModal').classList.add('flex');
        }

        function closeCSOptions() {
            document.getElementById('CSModal').classList.add('hidden');
            document.getElementById('CSModal').classList.remove('flex');
        }

        function showMonitoring() {
            document.getElementById('MonitoringModal').classList.remove('hidden');
            document.getElementById('MonitoringModal').classList.add('flex');
        }

        function closeMonitoring() {
            document.getElementById('MonitoringModal').classList.add('hidden');
            document.getElementById('MonitoringModal').classList.remove('flex');
        }

        function showPlanOptions() {
            document.getElementById('PlanModal').classList.remove('hidden');
            document.getElementById('PlanModal').classList.add('flex');
        }

        function closePlanOptions() {
            document.getElementById('PlanModal').classList.add('hidden');
            document.getElementById('PlanModal').classList.remove('flex');
        }

        function showGimOptions() {
            document.getElementById('gimModal').classList.remove('hidden');
            document.getElementById('gimModal').classList.add('flex');
        }

        function closeGimOptions() {
            document.getElementById('gimModal').classList.add('hidden');
            document.getElementById('gimModal').classList.remove('flex');
        }

        function showComingSoon(message = 'Halaman ini sedang dalam tahap pengembangan') {
            document.getElementById('comingSoonMessage').textContent = message;
            document.getElementById('comingSoonModal').classList.remove('hidden');
            document.getElementById('comingSoonModal').classList.add('flex');
        }

        function closeComingSoon() {
            document.getElementById('comingSoonModal').classList.add('hidden');
            document.getElementById('comingSoonModal').classList.remove('flex');
        }

        function notifyMe() {
            alert('Terima kasih! Kami akan memberitahu Anda ketika fitur ini tersedia.');
            closeComingSoon();
        }

        function navigateToPage(page) {
            showComingSoon('Fitur ' + page.replace(/-/g, ' ').toUpperCase() + ' sedang dalam pengembangan');
        }

        // Close modals when clicking outside
        document.addEventListener('click', function(event) {
            const modals = ['infoModal', 'OrderModal', 'stokModal', 'CSModal', 'MonitoringModal', 'PlanModal', 'gimModal', 'comingSoonModal'];
            modals.forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (event.target === modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuButton = document.querySelector('.mobile-menu-btn');
            if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

