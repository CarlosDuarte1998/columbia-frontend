<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RDJLQ60QZB'
    script.async = true

    const gtag = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date())
      gtag('config', 'G-RDJLQ60QZB')
    }

    document.head.appendChild(script)
    window.gtag = gtag
  });
</script>