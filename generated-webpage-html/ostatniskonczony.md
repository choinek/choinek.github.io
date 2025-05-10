**1. `Navbar.php`**

```php
<?php

declare(strict_types=1);

class Navbar
{
    public function render(): string
    {
        return <<<HTML
<div class="navbar">
    <div class="navbar-content">
        <a href="../top1/index.html">Home</a>
        <a href="../top2/index.html">With Menu</a>
        <a href="../top3/index.html">Center Only</a>
        <form class="search-form">
            <input type="search" placeholder="Search...">
        </form>
    </div>
</div>
HTML;
    }
}
```

---

**2. `Sidebar.php`**

```php
<?php

declare(strict_types=1);

class Sidebar
{
    private array $pages;

    public function __construct(array $pages)
    {
        $this->pages = $pages;
    }

    public function render(): string
    {
        $items = '';
        foreach ($this->pages as $slug => $title) {
            $items .= '<a href="../' . $slug . '/index.html">' . htmlspecialchars($title) . '</a>';
        }
        return <<<HTML
<aside class="sidebar">
    {$items}
</aside>
HTML;
    }
}
```

---

**3. `Content.php`**

```php
<?php

declare(strict_types=1);

class Content
{
    public function render(string $pageTitle, bool $withSidebar): string
    {
        $layoutClass = $withSidebar ? 'content with-sidebar' : 'content full';
        $body = '<h1>' . htmlspecialchars($pageTitle) . '</h1>';
        if ($pageTitle === 'Top1') {
            $body = '<div class="box">Main page without sidebar</div>';
        } elseif ($pageTitle === 'Top3') {
            $body = '<div class="box">Center only box</div>';
        } else {
            $body .= $this->cards() . $this->treeList() . $this->form();
        }
        return <<<HTML
<main class="{$layoutClass}">
    {$body}
</main>
HTML;
    }

    private function cards(): string
    {
        return <<<HTML
<div class="card">Lorem ipsum dolor sit amet.</div>
<div class="box">Sed do eiusmod tempor incididunt.</div>
<div class="card">Ut enim ad minim veniam.</div>
HTML;
    }

    private function treeList(): string
    {
        return <<<HTML
<div class="tree">
    <ul>
        <li>Folder 1
            <ul>
                <li>File 1-1</li>
                <li>File 1-2</li>
            </ul>
        </li>
        <li>Folder 2
            <ul>
                <li>File 2-1</li>
                <li>File 2-2</li>
            </ul>
        </li>
    </ul>
</div>
HTML;
    }

    private function form(): string
    {
        return <<<HTML
<form>
    <input type="text" placeholder="Text input">
    <input type="email" placeholder="Email input">
    <input type="password" placeholder="Password input">
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <textarea placeholder="Textarea"></textarea>
    <button type="submit">Submit</button>
</form>
HTML;
    }
}
```

---

**4. `Layout.php`**

```php
<?php

declare(strict_types=1);

class Layout
{
    private Navbar $navbar;
    private Sidebar $sidebar;
    private Content $content;
    private bool $withSidebar;
    private string $pageTitle;

    public function __construct(Navbar $navbar, Sidebar $sidebar, Content $content, bool $withSidebar, string $pageTitle)
    {
        $this->navbar = $navbar;
        $this->sidebar = $sidebar;
        $this->content = $content;
        $this->withSidebar = $withSidebar;
        $this->pageTitle = $pageTitle;
    }

    public function render(): string
    {
        return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{$this->pageTitle}</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{$this->navbar->render()}
<div class="wrapper">
HTML
. ($this->withSidebar ? $this->sidebar->render() : '') .
$this->content->render($this->pageTitle, $this->withSidebar) .
'</div></body></html>';
    }
}
```

---

**5. `style.css`**

```css
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #0d1117;
    color: #c9d1d9;
}
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(22, 27, 34, 0.8);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1rem;
    z-index: 1000;
}
.navbar-content {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.navbar-content a {
    color: #c9d1d9;
    text-decoration: none;
}
.search-form {
    margin-left: auto;
}
.sidebar {
    width: 288px;
    background: #161b22;
    height: 100vh;
    padding: 1rem;
    position: fixed;
    top: 3.5rem;
    left: 0;
    overflow-y: auto;
}
.sidebar a {
    display: block;
    margin: 0.5rem 0;
    color: #c9d1d9;
    text-decoration: none;
}
.wrapper {
    display: flex;
    margin-top: 3.5rem;
}
.content {
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
}
.content.with-sidebar {
    margin-left: 288px;
}
.content.full {
    margin-left: 0;
}
.card, .box {
    background: #161b22;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
}
input, select, textarea, button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background: #0d1117;
    color: #c9d1d9;
}
input::placeholder, textarea::placeholder {
    color: #8b949e;
}
button {
    background: #238636;
    cursor: pointer;
}
.tree ul {
    list-style: none;
    padding-left: 1rem;
}
.tree li {
    margin: 0.5rem 0;
}
@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
    .content.with-sidebar {
        margin-left: 0;
    }
}
```

---

**6. `build.php`**

```php
<?php

declare(strict_types=1);

require_once 'Navbar.php';
require_once 'Sidebar.php';
require_once 'Content.php';
require_once 'Layout.php';

$pages = [
    'index' => 'Home',
    'dashboard' => 'Dashboard',
    'profile' => 'Profile',
    'settings' => 'Settings',
    'files' => 'Files',
    'messages' => 'Messages',
    'notifications' => 'Notifications',
    'support' => 'Support',
    'about' => 'About',
    'contact' => 'Contact',
    'legal' => 'Legal',
    'top1' => 'Top1',
    'top2' => 'Top2',
    'top3' => 'Top3',
];

foreach ($pages as $slug => $title) {
    $outputDir = __DIR__ . '/output/' . $slug;
    if (!is_dir($outputDir)) {
        mkdir($outputDir, 0777, true);
    }
    $navbar = new Navbar();
    $sidebar = new Sidebar($pages);
    $content = new Content();
    $withSidebar = !in_array($slug, ['top1', 'top3'], true);
    $layout = new Layout($navbar, $sidebar, $content, $withSidebar, $title);
    file_put_contents($outputDir . '/index.html', $layout->render());
}
```
