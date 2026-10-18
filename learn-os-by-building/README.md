# Learn OS by Building

「作って学ぶOSの仕組み」の実装リポジトリです。

## 概要

このプロジェクトでは、OSの基本的な仕組みをゼロから実装して学びます。
Rustを使ってOSカーネルを作成し、QEMUで動作確認します。

## 必要環境

- Rust
- QEMU
- direnv
- nix
- mise

## セットアップ

### 前提条件

- [direnv](https://direnv.net/) をインストール
- [nix](https://nixos.org/) をインストール (flakes対応)

### 開発環境の構築

```bash
# リポジトリをクローン
git clone <repository-url>
cd learn-os-by-building

# direnvを許可
direnv allow

# QEMUとRustが自動的にインストールされます
```

## ディレクトリ構成

```
.
├── src/           # Rustソースコード
├── flake.nix      # Nix Flake設定
├── .envrc         # direnv設定
├── .mise.toml     # Mise設定
└── README.md
```

## 開発コマンド

```bash
# ビルド
cargo build

# 実行（QEMU）
cargo run

# テスト
cargo test
```

## 参考資料

- [作って学ぶOSの仕組み](https://www.amazon.co.jp/)
- [Rust]([https://www.rust-lang.org/])
- [QEMU](https://www.qemu.org/)
