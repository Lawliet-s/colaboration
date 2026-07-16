# Collab - Belajar Git & GitHub

Repo ini dibuat untuk belajar dasar-dasar Git dan GitHub secara kolaboratif.

---

## Dasar-Dasar Git

### 1. Inisialisasi Repository

```bash
git init
```
Membuat repository Git baru di folder saat ini.

```bash
git clone <url-repo>
```
Meng-clone repository dari remote (GitHub) ke lokal.

---

### 2. Melacak Perubahan

```bash
git status
```
Menampilkan status file (modified, staged, untracked).

```bash
git add <file>
```
Menambahkan file ke staging area.

```bash
git add .
```
Menambahkan semua file yang berubah ke staging area.

```bash
git reset <file>
```
Mengeluarkan file dari staging area.

---

### 3. Menyimpan Perubahan (Commit)

```bash
git commit -m "pesan commit"
```
Menyimpan perubahan yang sudah di-`add` ke history repository.

```bash
git commit -a -m "pesan commit"
```
Menambahkan dan commit langsung untuk file yang sudah di-track.

```bash
git log
```
Melihat history commit.

```bash
git log --oneline
```
Melihat history commit secara ringkas.

---

### 4. Bekerja dengan Remote Repository

```bash
git remote add origin <url-repo>
```
Menambahkan remote repository (biasanya di GitHub).

```bash
git remote -v
```
Melihat daftar remote yang terhubung.

---

### 5. Push (Mengirim ke GitHub)

```bash
git push origin <branch>
```
Mengirim commit dari branch lokal ke remote. Contoh: `git push origin main`

```bash
git push -u origin <branch>
```
Mengirim sekaligus mengatur upstream (cukup sekali, next tinggal `git push`).

```bash
git push --all origin
```
Mendorong semua branch ke remote.

```bash
git push origin --delete <branch>
```
Menghapus branch di remote.

---

### 6. Pull (Mengambil dari GitHub)

```bash
git pull origin <branch>
```
Mengambil perubahan terbaru dari remote dan menggabungkannya (merge) ke branch lokal.

```bash
git pull --rebase origin <branch>
```
Mengambil perubahan dan me-rebase (riwayat lebih bersih).

> **Tips:** Selalu `git pull` sebelum mulai bekerja agar kode tetap sinkron dengan tim.

---

### 7. Branch (Percabangan)

```bash
git branch
```
Melihat daftar branch lokal. Tanda `*` menandakan branch aktif.

```bash
git branch <nama-branch>
```
Membuat branch baru.

```bash
git checkout <nama-branch>
```
Pindah ke branch lain.

```bash
git checkout -b <nama-branch>
```
Membuat dan langsung pindah ke branch baru.

```bash
git merge <nama-branch>
```
Menggabungkan branch lain ke branch aktif saat ini.

```bash
git branch -d <nama-branch>
```
Menghapus branch lokal (setelah di-merge).

---

### 8. Melihat Perbedaan

```bash
git diff
```
Melihat perubahan yang belum di-`add`.

```bash
git diff --staged
```
Melihat perubahan yang sudah di-`add` tapi belum di-commit.

```bash
git diff <branch1> <branch2>
```
Membandingkan dua branch.

---

### 9. Membatalkan Perubahan

```bash
git checkout -- <file>
```
Mengembalikan file ke kondisi commit terakhir (sebelum di-`add`).

```bash
git reset HEAD <file>
```
Unstage file (kebalikan `git add`).

```bash
git reset --soft HEAD~1
```
Membatalkan commit terakhir, perubahan tetap di staging area.

```bash
git reset --hard HEAD~1
```
Membatalkan commit terakhir dan menghapus semua perubahan.

```bash
git restore <file>
```
Cara modern menggantikan `git checkout -- <file>`.

---

### 10. Stash (Menyimpan Sementara)

```bash
git stash
```
Menyimpan perubahan sementara (belum di-commit) agar bisa pindah branch.

```bash
git stash pop
```
Mengembalikan stash terakhir dan menghapusnya dari daftar stash.

```bash
git stash list
```
Melihat daftar stash.

---

### 11. Fork & Pull Request (Kolaborasi)

1. **Fork** repo orang lain dari GitHub.
2. **Clone** hasil fork ke lokal.
3. Buat **branch baru**, lakukan perubahan, **commit**, **push**.
4. Buka **Pull Request** dari branch di fork kamu ke repo asli.
5. Tunggu di-**review** dan di-**merge** oleh pemilik repo.

---

## Alur Kerja Kolaborasi Tim

### Sederhana (Semua di Branch Main)
```bash
git pull origin main    # ambil update terbaru
# edit file
git add .
git commit -m "pesan"
git push origin main
```

### Dengan Branch (Recommended)
```bash
git checkout -b fitur-baru
# edit file
git add .
git commit -m "menambahkan fitur baru"
git push -u origin fitur-baru
# buat Pull Request di GitHub
```

---

## Cheat Sheet Cepat

| Perintah | Fungsi |
|----------|--------|
| `git init` | Buat repo baru |
| `git clone <url>` | Salin repo dari remote |
| `git add .` | Stage semua perubahan |
| `git commit -m "pesan"` | Commit perubahan |
| `git push origin main` | Kirim ke remote |
| `git pull origin main` | Ambil dari remote |
| `git branch` | Lihat branch |
| `git checkout -b <nama>` | Buat & pindah branch |
| `git merge <branch>` | Gabung branch |
| `git log --oneline` | Lihat history commit |
| `git status` | Cek status |
| `git diff` | Lihat perubahan |
| `git stash` | Simpan sementara |

---

## Sumber Belajar

- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Learn Git Branching (Interactive)](https://learngitbranching.js.org/)
