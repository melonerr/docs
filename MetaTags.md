# **Meta Tags**

##### canonical Tag

```HTML
<link rel="canonical" href="http://example.com" />
```

##### Content Type

```HTML
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

##### Robots Meta Tags

Robots Meta Tags คือการเขียนคำสั่งเพื่อไม่ให้ Search Engines แสดงผลหน้าเว็บไซต์ดังกล่าว เช่น

* **noindex** → ป้องกันไม่ให้แสดงผลหน้าเว็บไซต์ในผลการค้นหา
* **nofollow** → ป้องกันไม่ให้แสดงผลจากลิงก์ที่อยู่ในหน้าเว็บไซต์
* **nosnippet** → ป้องกันไม่ให้แสดงข้อความ (Text Snippet) หรือ Video Preview ที่อยู่บนหน้าเว็บไซต์ในผลการค้นหา
* **noarchive** → ป้องกันไม่ให้แสดงผลจาก Cached Link สำหรับหน้าเว็บไซต์
* **unavailable_after:[date]** → ใช้เพื่อระบุวันที่ไม่ต้องการให้แสดงผลหน้าเว็บไซต์ในผลการค้นหาอีกต่อไป

Ex
  	"nofollow" ใช้ในหน้าเว็บที่มีส่วนที่ให้ผู้อ่านแสดงความคิดเห็น ซึ่งไม่สามารถควบคุมการโพสต์ลิงก์ที่ไม่เกี่ยวข้องได้
	"noindex"  ใช้ในระหว่างเวลาที่กำลังทดสอบการออกแบบหน้าเว็บไซต์แบบใหม่บนเซิร์ฟเวอร์ที่มีโดเมนย่อยบนเว็บไซต์

```HTML
<meta name="robots" content="noindex, nofollow">
```

#### GoogleTag

```HTML
// head
<title>Example Title</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="This is an example of my meta description.">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">

// link
<link rel="canonical" href="http://example.com" />
// img
<img src="metatag.jpg" alt="Meta tag picture">
```

#### Facebook

```HTML
<meta property="fb:app_id" content="APPID"/>
<meta property="og:url" content="url">
<meta property="og:type" content="website">
<meta property="og:title" content="title">
<meta property="og:description" content="description">
<meta property="og:image" content="URL">
<meta property="og:image:alt" content="image descriptions">
```

#### Twitter

```HTML
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="domain">
<meta property="twitter:url" content="url">
<meta name="twitter:title" content="title">
<meta name="twitter:description" content="description">
<meta name="twitter:image" content= content="URL">

```

---
