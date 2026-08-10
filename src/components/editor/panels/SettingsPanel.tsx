'use client';

import React, { useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { downloadJsonFile, downloadZipBackup, parseAndValidateJsonFile } from '@/lib/storage/export-import';
import { Download, Upload, RotateCcw, FileJson, Archive, Check, AlertCircle } from 'lucide-react';

export const SettingsPanel: React.FC = () => {
  const { config, setConfigDirectly, resetToDefault, updateConfig } = useSiteStore();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [importStatus, setImportStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleExportJson = () => {
    downloadJsonFile(config, `${config.business.shortName || 'site'}-config.json`);
  };

  const handleExportZip = async () => {
    await downloadZipBackup(config);
  };

  const handleImportJson = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImportStatus(null);
    const result = await parseAndValidateJsonFile(file);
    if (result.success && result.data) {
      setConfigDirectly(result.data);
      setImportStatus({ success: true, message: 'Ayarlar başarıyla içe aktarıldı!' });
    } else {
      setImportStatus({ success: false, message: result.error || 'Dosya ayrıştırılamadı' });
    }
  };

  const handleConfirmReset = () => {
    resetToDefault();
    setShowResetConfirm(false);
  };

  return (
    <div className="space-y-6">
      {/* 1. Dışa ve İçe Aktarma */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Download className="w-4 h-4 text-brand-primary" />
          Yedekleme ve İçe/Dışa Aktarma
        </h4>

        <div className="space-y-3">
          {/* Export JSON */}
          <button
            onClick={handleExportJson}
            className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-2">
              <FileJson className="w-4 h-4 text-brand-primary" />
              <span>Ayarları JSON Olarak İndir</span>
            </div>
            <Download className="w-4 h-4 text-muted" />
          </button>

          {/* Export Full ZIP */}
          <button
            onClick={handleExportZip}
            className="w-full py-3 px-4 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-hover transition-colors flex items-center justify-between shadow-md"
          >
            <div className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              <span>Tam Yedek İndir (JSON + Tüm Görseller ZIP)</span>
            </div>
            <Download className="w-4 h-4" />
          </button>

          {/* Import JSON */}
          <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-700/60">
            <label className="w-full py-3 px-4 rounded-xl border border-dashed border-slate-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-xs font-bold text-foreground hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer flex items-center justify-center gap-2">
              <Upload className="w-4 h-4 text-brand-primary" />
              <span>Yedek JSON Dosyası Yükle</span>
              <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
            </label>

            {importStatus && (
              <div
                className={`mt-2 p-3 rounded-xl text-xs flex items-center gap-2 ${
                  importStatus.success
                    ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                }`}
              >
                {importStatus.success ? <Check className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{importStatus.message}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Yayınlama ve Özellik Seçenekleri */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Görünürlük ve Yayın Ayarları
        </h4>

        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-xs font-bold text-foreground">Görsel Editör Butonu</h5>
            <p className="text-[10px] text-muted">Yayınlanan sitede &quot;Özelleştir&quot; butonunun görünürlüğü</p>
          </div>
          <button
            onClick={() =>
              updateConfig((draft) => {
                draft.features.showDemoButton = !draft.features.showDemoButton;
              })
            }
            className={`w-12 h-6 rounded-full transition-colors relative ${
              config.features.showDemoButton ? 'bg-brand-primary' : 'bg-slate-300 dark:bg-zinc-700'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform absolute top-0.5 ${
                config.features.showDemoButton ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 3. Sıfırlama */}
      <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
        <h4 className="text-sm font-bold text-rose-600 dark:text-rose-400">Tüm Değişiklikleri Sıfırla</h4>
        <p className="text-xs text-muted">
          Web sitenizi varsayılan nötr başlangıç ayarlarına döndürür. Yaptığınız düzenlemeler silinecektir.
        </p>

        {showResetConfirm ? (
          <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-rose-200 dark:border-rose-900 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Emin misiniz?</span>
            <div className="flex gap-2">
              <button
                onClick={handleConfirmReset}
                className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold shadow-xs hover:bg-rose-700"
              >
                Evet, Sıfırla
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-zinc-700 text-xs font-bold text-foreground"
              >
                İptal
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 rounded-xl border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-500/10 transition-colors inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Varsayılana Sıfırla</span>
          </button>
        )}
      </div>
    </div>
  );
};
